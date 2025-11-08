# Death Order Algorithm Test Page

## 🧪 Purpose

This is an **isolated testing environment** to solve the death order calculation problem from first principles without breaking the main calculator.

## 🚀 Quick Start

### Option 1: Use the serve script
```bash
cd /home/mason/local/stacking-calc
./serve-test.sh
```

Then open: http://localhost:8080/death-order-test.html

### Option 2: Open directly
```bash
open death-order-test.html
# or
xdg-open death-order-test.html
# or just drag the file into your browser
```

## 📊 What You'll See

### 1. **Controls**
- Leadership Cap (default: 80,000)
- Unit Padding % (default: 0.5%)

### 2. **Test Units Panel**
Hard-coded 24 units:
- S5/G5/S6/G6/S7/G7
- Melee/Mounted/Ranged/Flying for each
- Real base health and stat bonuses

### 3. **Algorithm Steps Panel**
Shows the calculation process:
1. Death sequence definition
2. Target health pool calculations
3. Total leadership needed
4. Scale factor
5. Final unit counts

### 4. **Death Order Results Panel**
Table showing:
- Rank (1-24)
- Unit name
- Final unit count
- Leadership used
- **Final health pool** (THIS IS THE KEY!)
- Status (✓ if correct order, ✗ if wrong)

### 5. **Detailed Debug Info**
For EACH unit, shows:
- Position in sequence
- Base health & stat bonus
- Actual unit health (base × bonus)
- Target multiplier calculation
- Target health pool
- Units needed (before scaling)
- Leadership needed (before scaling)
- Scale factor applied
- **Final values** (units, leadership, health pool)
- % difference from previous unit

## 🎯 What "Correct" Means

**Correct death order:**
```
Rank 1:  S5-melee    (HIGHEST health)  ← Dies FIRST
Rank 2:  S5-mounted
Rank 3:  S5-ranged
Rank 4:  S5-flying
Rank 5:  G5-melee
Rank 6:  G5-mounted
Rank 7:  G5-ranged
Rank 8:  G5-flying
Rank 9:  S6-melee
...
Rank 24: G7-flying   (LOWEST health)   ← Dies LAST (most protected)
```

**Health pools must be DESCENDING**:
- Each unit should have ≤ health than the previous
- Should see negative % (e.g., "-0.5% vs prev")
- All rows show green ✓

## 🔍 Debugging

### Current Algorithm

```javascript
// 1. Define sequence (S5→G5→S6→G6→S7→G7, melee→mounted→ranged→flying)
const deathSequence = sortUnits(S5_before_S6, S_before_G, melee_before_flying);

// 2. Assign target health pools (BACKWARDS from last to first)
for (i = last; i >= first; i--) {
  stepsFromEnd = numUnits - 1 - i;
  targetHealthPool[i] = baseline × (1 + padding%)^stepsFromEnd;
}
// Result: S5-melee gets HIGHEST target, G7-flying gets baseline

// 3. Calculate units needed
unitsNeeded = targetHealthPool / actualUnitHealth;

// 4. Scale to fit leadership cap
scaleFactor = leadershipCap / totalLeadershipNeeded;
finalUnits = round(unitsNeeded × scaleFactor);

// 5. Calculate final health pools
finalHealthPool = finalUnits × actualUnitHealth;
```

### Key Question

**Does `finalHealthPool` maintain the same ratio as `targetHealthPool`?**

If not, WHY NOT?

Possible issues:
- Rounding errors breaking ratios
- actualUnitHealth differences not accounted for
- Scale factor applied incorrectly

## 🧮 Manual Check Example

With 0.5% padding, 24 units:

```
G7-flying (position 23, last):
  stepsFromEnd = 0
  targetMultiplier = (1.005)^0 = 1.0
  targetHealthPool = 10M × 1.0 = 10M
  actualUnitHealth = 10,200 × 9.74 = 99,348
  unitsNeeded = 10M / 99,348 ≈ 100.66 units

S5-melee (position 0, first):
  stepsFromEnd = 23
  targetMultiplier = (1.005)^23 = 1.1216
  targetHealthPool = 10M × 1.1216 = 11.216M
  actualUnitHealth = 5,100 × 10.18 = 51,918
  unitsNeeded = 11.216M / 51,918 ≈ 216.07 units
```

After scaling and rounding, does S5-melee still have ~12% more health than G7-flying?

## ✅ Success Criteria

Summary should show:
- **Death Order: ✓ CORRECT** (green)
- All 24 rows have green ✓
- Health pools descend smoothly
- % differences are negative and close to padding%

## 📝 Notes

Once we get this working, we can:
1. Port the exact algorithm to `app.js`
2. Update the main calculator's Death Order Mode
3. Delete this test page (or keep it for regression testing)

## 🐛 Known Issues to Investigate

- [ ] Does proportional scaling maintain health ratios?
- [ ] Do rounding errors accumulate and break sequence?
- [ ] Is the target health baseline appropriate?
- [ ] Should we use ceiling/floor instead of round?

