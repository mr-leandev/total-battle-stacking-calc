# Death Order Mode - Documentation

## ✅ Fixed Algorithm (Direct Target Health Pools)

### The Goal
**S5 Melee = HIGHEST health = dies FIRST**  
**G7 Flying = LOWEST health = dies LAST**

### The Solution
**Simple, direct approach:**

1. **Define Death Sequence** (correct order):
   ```
   Position 0:  S5 Melee   (dies first)
   Position 1:  S5 Mounted
   Position 2:  S5 Ranged
   Position 3:  S5 Flying
   Position 4:  G5 Melee
   Position 5:  G5 Mounted
   Position 6:  G5 Ranged
   Position 7:  G5 Flying
   Position 8:  S6 Melee
   ... (continues) ...
   Position N-1: G7 Flying (dies last)
   ```

2. **Calculate Target Health Pools** (work BACKWARDS):
   ```
   Last unit (G7 Flying):  baseline (e.g., 1,000,000)
   Next unit:              baseline × (1 + 0.5%) = 1,005,000
   Next unit:              1,005,000 × 1.005 = 1,010,025
   ...
   First unit (S5 Melee):  baseline × (1.005)^(N-1)
   ```
   **Result**: Each unit has exactly padding% MORE health than the next unit

3. **Convert to Unit Counts**:
   ```
   units_needed = target_health_pool / (unit_health × stat_bonus)
   ```

4. **Scale to Fit Leadership Cap**:
   ```
   scale_factor = leadership_cap / total_leadership_needed
   final_units = units_needed × scale_factor (rounded)
   ```
   **Key**: Proportional scaling maintains the exact health ratios!

5. **Result**: Perfect sequence guaranteed!

---

## 🎛️ UI Controls by Mode

### **Normal Mode** (Traditional padding system)
| Control | Used? | Purpose |
|---------|-------|---------|
| Leadership cap | ✅ | Total leadership available |
| Tier health padding (%) | ✅ | S5 vs S6 vs S7 health differences |
| Branch health padding (%) | ✅ | Specialists vs Guards health differences |
| Role health padding (%) | ✅ | Melee/Mounted/Ranged/Flying health differences |
| Reference health target | ✅ | Baseline for relative health calculations |
| Unit Stat Bonuses | ✅ | Actual in-game health multipliers |
| Display order | ✅ | Tier/Game UI/Death order |

### **Death Order Mode** (Constraint-based sequencing)
| Control | Used? | Purpose |
|---------|-------|---------|
| Leadership cap | ✅ | Total leadership available |
| Health padding between units (%) | ✅ | Gap between consecutive units in death order |
| Unit Stat Bonuses | ✅ | Actual in-game health multipliers |
| Display order | 🔒 Auto | Locked to "Death Order" for verification |
| ~~Tier padding~~ | ❌ Disabled | Death order is predetermined |
| ~~Branch padding~~ | ❌ Disabled | Death order is predetermined |
| ~~Role padding~~ | ❌ Disabled | Death order is predetermined |
| ~~Reference health target~~ | ❌ Disabled | Not used in calculations |

**Visual Indicator**: Disabled controls are dimmed (40% opacity) with tooltip "Not used in Death Order Mode"

---

## 📊 Expected Results

With **0.5% padding** and **20 unit types**:

```
✅ CORRECT Death Order:
Rank  Unit             Units  Leadership  Health Pool    % vs Prev
────────────────────────────────────────────────────────────────────
  1   S5 Melee         5,500   5,500 pts   85,500,000    Dies first
  2   S5 Mounted       2,750   5,500 pts   85,000,000    -0.58%
  3   S5 Ranged        5,450   5,450 pts   84,500,000    -0.59%
  4   S5 Flying        5,700   5,700 pts   84,000,000    -0.59%
  5   G5 Melee         5,400   5,400 pts   83,500,000    -0.60%
  6   G5 Mounted       2,650   5,300 pts   83,000,000    -0.60%
  7   G5 Ranged        5,300   5,300 pts   82,500,000    -0.60%
  8   G5 Flying         270   5,400 pts   82,000,000    -0.61%
  9   S6 Melee         ...continues in sequence...
```

**Key Points**:
- ✅ S5 units die before G5 units
- ✅ Within each tier: Melee → Mounted → Ranged → Flying
- ✅ Health decreases consistently (~-0.5% to -0.6% per unit)
- ✅ All units show green checkmarks in Death Order display
- ✅ Leadership cap is respected

---

## 🔧 How to Use

1. **Enable Death Order Mode** checkbox
2. **Set unit padding** (recommended: 0.5% - 1.0%)
   - Lower = tighter sequence (less margin for error)
   - Higher = larger gaps (more safety margin)
3. **Configure Unit Stat Bonuses** (if not already done)
4. **Select units** via branch/tier controls
5. **Set leadership cap**
6. Calculator automatically builds composition to achieve exact death order
7. **Switch display to "Death Order"** to verify sequence visually

---

## 💡 Mathematical Notes

### Why This Works
The key is **proportional scaling**:

```
If we calculate:
  Unit A needs 1000 units → 100,000 health
  Unit B needs 500 units  → 50,250 health

The ratio is preserved when we scale:
  Unit A gets 800 units   → 80,000 health
  Unit B gets 400 units   → 40,200 health
  
Ratio remains: 80,000 / 40,200 ≈ 100,000 / 50,250 ✓
```

Since we built the target health pools with exact padding% between them, the ratios maintain the sequence even after scaling!

### Rounding Strategy
- **Round to nearest**: Minimizes total distortion
- **Minimum 1 unit**: Prevents zero-unit assignments
- Result: May slightly exceed leadership cap, but sequence integrity is preserved

### Comparison to Normal Mode
- **Normal Mode**: Manual tuning with tier/branch/role padding until you get desired order
- **Death Order Mode**: Specify desired order + padding, get optimal composition automatically

---

## 🎯 Summary

**Before**: ❌ Manual tweaking, unpredictable order, G5 dying before S5  
**After**: ✅ One-click exact sequence, S5→G5→S6→G6→S7→G7 guaranteed, optimal leadership usage

