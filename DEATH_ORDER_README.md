# ☠️ Death Order Calculator

## Overview

**Standalone calculator** that builds army compositions to achieve exact death sequence:

**S5 → G5 → S6 → G6 → S7 → G7**

(Melee → Mounted → Ranged → Flying within each tier)

## 🎯 Purpose

The main calculator uses **manual padding** (tier/branch/role) where you tweak values until you get the order you want.

The **Death Order Calculator** uses **constraint-based calculation** where you:
1. Define the exact order you want (built-in)
2. Set one padding value (gap between consecutive units)
3. Calculator works backwards to determine optimal composition

**Result**: Guaranteed death sequence every time!

## 🚀 Access

- **From main calculator**: Click "☠️ Death Order Calculator →" in header
- **Direct**: Open `death-order.html` in browser
- **Via server**: `./serve-test.sh` → http://localhost:8080/death-order.html

## ⚙️ How It Works

### Algorithm (from death-order-test.html)

```javascript
1. Define death sequence (S5→G5→S6→G6→S7→G7, melee→mounted→ranged→flying)
   
2. Assign target health pools (work BACKWARDS from last to first):
   - Last unit (G7-flying): baseline (e.g., 10M HP)
   - Each previous unit: next × (1 + padding%)
   - Result: First unit has highest target health
   
3. Calculate units needed for each type:
   units_needed = target_health / (base_health × stat_bonus)
   
4. Calculate total leadership needed:
   total = sum(units_needed × leadership_cost)
   
5. Scale to fit leadership cap:
   scale_factor = leadership_cap / total_leadership_needed
   final_units = round(units_needed × scale_factor)
   
6. Calculate final health pools:
   final_health = final_units × (base_health × stat_bonus)
```

### Key Insight

**Proportional scaling maintains ratios!**

If we calculate:
- Unit A needs 1000 units → 100,000 HP
- Unit B needs 500 units → 50,000 HP

When scaled:
- Unit A gets 800 units → 80,000 HP
- Unit B gets 400 units → 40,000 HP

The ratio (2:1) is preserved! This maintains the death order.

## 📋 Features

### Inputs
- **Leadership cap**: Total leadership available
- **Unit padding %**: Health gap between consecutive units (0.5-1.0% recommended)
- **Stat bonuses**: In-game health multipliers (hero skills, research, etc.)
- **Troop selector**: Choose which branches/tiers are available

### Outputs
- **Death order composition**: Exact unit counts for each type
- **Rank & sequence**: Visual confirmation of death order
- **Health pools**: Total health for each unit type
- **Copy buttons**: Individual units or full list

### Visual Indicators
- ✅ Green checkmarks = correct sequence (health descending)
- ❌ Red X = out of sequence (something wrong)
- % vs prev = health difference from previous unit

## 🎮 Usage Example

**Setup:**
1. Set leadership cap: 80,000
2. Set unit padding: 0.5%
3. Configure stat bonuses (or use defaults)
4. Select available troops (S5-S7, G5-G7)

**Result:**
```
Rank 1: S5-melee     - 1,283 units - 66,610,794 HP ← Dies first
Rank 2: S5-mounted   - 1,276 units - 66,247,368 HP (-0.55%)
Rank 3: S5-ranged    - 1,270 units - 65,935,860 HP (-0.47%)
...
Rank 24: G7-flying   - 598 units   - 59,410,104 HP ← Dies last
```

All green checkmarks = perfect sequence!

## 📊 When to Use

**Use Death Order Calculator when:**
- ✅ You want guaranteed S5→G5→S6→G6→S7→G7 order
- ✅ You don't want to manually tweak padding values
- ✅ You need a specific attack sequence for game mechanics
- ✅ You want consistent results every time

**Use Main Calculator when:**
- ✅ You want custom tier/branch/role padding
- ✅ You're experimenting with different distributions
- ✅ You need fine-grained control over each tier
- ✅ You want to see monster battle calculations

## 🔍 Troubleshooting

### "Out of sequence" (Red X)

**Causes:**
- Padding too low (units too close together)
- Rounding errors with certain unit combinations
- Very different unit costs (flying vs melee)

**Fix:**
- Increase padding (try 1.0% instead of 0.5%)
- Disable problematic units
- Check stat bonuses are correct

### "Exceeds leadership cap"

**Causes:**
- Rounding errors accumulate
- Too many different unit types

**Fix:**
- Slight overages (<100) are acceptable
- Disable some units to reduce total
- Algorithm prioritizes sequence over exact cap fit

### Wrong health pools

**Causes:**
- Stat bonuses not configured
- Using default 1.0x bonuses

**Fix:**
- Configure stat bonuses from in-game values
- Format: 1000% = 10.0x
- Click "✓ Apply Bonuses"

## 🧪 Testing

The `death-order-test.html` page was used to develop and verify the algorithm:
- Hard-coded test units
- Step-by-step calculation display
- Visual validation of each step
- Confirmed ✓ CORRECT before integrating

## 🔄 Integration with Main Calculator

**Shared:**
- `app.js` (TROOPS data, utility functions)
- `styles.css` (UI components)
- Stat bonuses (localStorage)
- Branch/tier selector logic

**Independent:**
- Calculation algorithm (different from main)
- UI layout (simplified, focused)
- No monster calculator integration

## 📈 Future Enhancements

Potential improvements:
- [ ] Export to CSV/JSON
- [ ] Import compositions
- [ ] Multiple death order presets
- [ ] Visual health pool chart
- [ ] Comparison mode (multiple scenarios)
- [ ] Integration with game API (if available)

## 🐛 Known Limitations

1. **Rounding**: May slightly exceed or fall short of leadership cap
2. **Flying units**: Very high leadership cost can skew distributions
3. **Small caps**: Leadership <10,000 may not work well
4. **Many units**: 20+ different types increases rounding errors

## 💡 Tips

- **Start with 0.5% padding**, increase if needed
- **Configure stat bonuses** for accurate results
- **Use "Copy All Units"** button for easy game entry
- **Check sequence indicators** (should all be green ✓)
- **Compare with main calculator** to validate

---

**Related Files:**
- `death-order.html` - Production calculator
- `death-order-test.html` - Algorithm test page
- `DEATH_ORDER_TEST_README.md` - Test page documentation
- `DEATH_ORDER_MODE.md` - Original algorithm attempts (deprecated)

