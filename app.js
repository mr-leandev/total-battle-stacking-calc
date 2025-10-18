const TROOPS = [
  // Specialists - Melee
  { id: "S9-ML", name: "Specialist 9 Melee", tier: 9, branch: "Specialists", role: "melee", strength: 5510, health: 16530, leadership: 1 },
  { id: "S8-ML", name: "Specialist 8 Melee", tier: 8, branch: "Specialists", role: "melee", strength: 3060, health: 9180, leadership: 1 },
  { id: "S7-ML", name: "Specialist 7 Melee", tier: 7, branch: "Specialists", role: "melee", strength: 1700, health: 5100, leadership: 1 },
  { id: "S6-ML", name: "Specialist 6 Melee", tier: 6, branch: "Specialists", role: "melee", strength: 940, health: 2820, leadership: 1 },
  { id: "S5-ML", name: "Specialist 5 Melee", tier: 5, branch: "Specialists", role: "melee", strength: 520, health: 1560, leadership: 1 },
  { id: "S4-ML", name: "Specialist 4 Melee", tier: 4, branch: "Specialists", role: "melee", strength: 290, health: 870, leadership: 1 },
  { id: "S3-ML", name: "Specialist 3 Melee", tier: 3, branch: "Specialists", role: "melee", strength: 160, health: 480, leadership: 1 },
  { id: "S2-ML", name: "Specialist 2 Melee", tier: 2, branch: "Specialists", role: "melee", strength: 90, health: 270, leadership: 1 },
  { id: "S1-ML", name: "Specialist 1 Melee", tier: 1, branch: "Specialists", role: "melee", strength: 50, health: 150, leadership: 1 },
  
  // Specialists - Ranged (available tier 5+)
  { id: "S9", name: "Specialist 9", tier: 9, branch: "Specialists", role: "ranged", strength: 5510, health: 16530, leadership: 1 },
  { id: "S8", name: "Specialist 8", tier: 8, branch: "Specialists", role: "ranged", strength: 3060, health: 9180, leadership: 1 },
  { id: "S7", name: "Specialist 7", tier: 7, branch: "Specialists", role: "ranged", strength: 1700, health: 5100, leadership: 1 },
  { id: "S6", name: "Specialist 6", tier: 6, branch: "Specialists", role: "ranged", strength: 940, health: 2820, leadership: 1 },
  { id: "S5", name: "Specialist 5", tier: 5, branch: "Specialists", role: "ranged", strength: 520, health: 1560, leadership: 1 },
  
  // Specialists - Flying (available tier 5+, leadership 1, same health as ranged since leadership is 1)
  { id: "S9-F", name: "Specialist 9 Flying", tier: 9, branch: "Specialists", role: "flying", strength: 5510, health: 16530, leadership: 1 },
  { id: "S8-F", name: "Specialist 8 Flying", tier: 8, branch: "Specialists", role: "flying", strength: 3060, health: 9180, leadership: 1 },
  { id: "S7-F", name: "Specialist 7 Flying", tier: 7, branch: "Specialists", role: "flying", strength: 1700, health: 5100, leadership: 1 },
  { id: "S6-F", name: "Specialist 6 Flying", tier: 6, branch: "Specialists", role: "flying", strength: 940, health: 2820, leadership: 1 },
  { id: "S5-F", name: "Specialist 5 Flying", tier: 5, branch: "Specialists", role: "flying", strength: 520, health: 1560, leadership: 1 },
  
  // Specialists - Mounted (leadership 2, health x2, available tier 5+)
  { id: "S9-M", name: "Specialist 9 Mounted", tier: 9, branch: "Specialists", role: "mounted", strength: 5510, health: 33060, leadership: 2 },
  { id: "S8-M", name: "Specialist 8 Mounted", tier: 8, branch: "Specialists", role: "mounted", strength: 3060, health: 18360, leadership: 2 },
  { id: "S7-M", name: "Specialist 7 Mounted", tier: 7, branch: "Specialists", role: "mounted", strength: 1700, health: 10200, leadership: 2 },
  { id: "S6-M", name: "Specialist 6 Mounted", tier: 6, branch: "Specialists", role: "mounted", strength: 940, health: 5640, leadership: 2 },
  { id: "S5-M", name: "Specialist 5 Mounted", tier: 5, branch: "Specialists", role: "mounted", strength: 520, health: 3120, leadership: 2 },
  
  // Guards - Melee
  { id: "G9", name: "Guard 9", tier: 9, branch: "Guards", role: "melee", strength: 5510, health: 16530, leadership: 1 },
  { id: "G8", name: "Guard 8", tier: 8, branch: "Guards", role: "melee", strength: 3060, health: 9180, leadership: 1 },
  { id: "G7", name: "Guard 7", tier: 7, branch: "Guards", role: "melee", strength: 1700, health: 5100, leadership: 1 },
  { id: "G6", name: "Guard 6", tier: 6, branch: "Guards", role: "melee", strength: 940, health: 2820, leadership: 1 },
  { id: "G5", name: "Guard 5", tier: 5, branch: "Guards", role: "melee", strength: 520, health: 1560, leadership: 1 },
  { id: "G4", name: "Guard 4", tier: 4, branch: "Guards", role: "melee", strength: 290, health: 870, leadership: 1 },
  { id: "G3", name: "Guard 3", tier: 3, branch: "Guards", role: "melee", strength: 160, health: 480, leadership: 1 },
  { id: "G2", name: "Guard 2", tier: 2, branch: "Guards", role: "melee", strength: 90, health: 270, leadership: 1 },
  { id: "G1", name: "Guard 1", tier: 1, branch: "Guards", role: "melee", strength: 50, health: 150, leadership: 1 },
  
  // Guards - Ranged
  { id: "G9-R", name: "Guard 9 Ranged", tier: 9, branch: "Guards", role: "ranged", strength: 5510, health: 16530, leadership: 1 },
  { id: "G8-R", name: "Guard 8 Ranged", tier: 8, branch: "Guards", role: "ranged", strength: 3060, health: 9180, leadership: 1 },
  { id: "G7-R", name: "Guard 7 Ranged", tier: 7, branch: "Guards", role: "ranged", strength: 1700, health: 5100, leadership: 1 },
  { id: "G6-R", name: "Guard 6 Ranged", tier: 6, branch: "Guards", role: "ranged", strength: 940, health: 2820, leadership: 1 },
  { id: "G5-R", name: "Guard 5 Ranged", tier: 5, branch: "Guards", role: "ranged", strength: 520, health: 1560, leadership: 1 },
  { id: "G4-R", name: "Guard 4 Ranged", tier: 4, branch: "Guards", role: "ranged", strength: 290, health: 870, leadership: 1 },
  { id: "G3-R", name: "Guard 3 Ranged", tier: 3, branch: "Guards", role: "ranged", strength: 160, health: 480, leadership: 1 },
  { id: "G2-R", name: "Guard 2 Ranged", tier: 2, branch: "Guards", role: "ranged", strength: 90, health: 270, leadership: 1 },
  { id: "G1-R", name: "Guard 1 Ranged", tier: 1, branch: "Guards", role: "ranged", strength: 50, health: 150, leadership: 1 },
  
  // Guards - Flying (available tier 5+, leadership 20, health x20)
  { id: "G9-F", name: "Guard 9 Flying", tier: 9, branch: "Guards", role: "flying", strength: 5510, health: 330600, leadership: 20 },
  { id: "G8-F", name: "Guard 8 Flying", tier: 8, branch: "Guards", role: "flying", strength: 3060, health: 183600, leadership: 20 },
  { id: "G7-F", name: "Guard 7 Flying", tier: 7, branch: "Guards", role: "flying", strength: 1700, health: 102000, leadership: 20 },
  { id: "G6-F", name: "Guard 6 Flying", tier: 6, branch: "Guards", role: "flying", strength: 940, health: 56400, leadership: 20 },
  { id: "G5-F", name: "Guard 5 Flying", tier: 5, branch: "Guards", role: "flying", strength: 520, health: 31200, leadership: 20 },
  
  // Guards - Mounted (leadership 2, health x2)
  { id: "G9-M", name: "Guard 9 Mounted", tier: 9, branch: "Guards", role: "mounted", strength: 5510, health: 33060, leadership: 2 },
  { id: "G8-M", name: "Guard 8 Mounted", tier: 8, branch: "Guards", role: "mounted", strength: 3060, health: 18360, leadership: 2 },
  { id: "G7-M", name: "Guard 7 Mounted", tier: 7, branch: "Guards", role: "mounted", strength: 1700, health: 10200, leadership: 2 },
  { id: "G6-M", name: "Guard 6 Mounted", tier: 6, branch: "Guards", role: "mounted", strength: 940, health: 5640, leadership: 2 },
  { id: "G5-M", name: "Guard 5 Mounted", tier: 5, branch: "Guards", role: "mounted", strength: 520, health: 3120, leadership: 2 },
  { id: "G4-M", name: "Guard 4 Mounted", tier: 4, branch: "Guards", role: "mounted", strength: 290, health: 1740, leadership: 2 },
  { id: "G3-M", name: "Guard 3 Mounted", tier: 3, branch: "Guards", role: "mounted", strength: 160, health: 960, leadership: 2 },
  { id: "G2-M", name: "Guard 2 Mounted", tier: 2, branch: "Guards", role: "mounted", strength: 90, health: 540, leadership: 2 },
  { id: "G1-M", name: "Guard 1 Mounted", tier: 1, branch: "Guards", role: "mounted", strength: 50, health: 300, leadership: 2 },
];

const BRANCH_REGISTRY = {};

TROOPS.forEach((unit) => {
  const key = unit.branch;
  if (!BRANCH_REGISTRY[key]) {
    // Extract base prefix (G or S) before any numbers or suffixes
    const basePrefix = unit.id.match(/^[A-Z]+/)[0];
    BRANCH_REGISTRY[key] = {
      key,
      label: unit.branch,
      prefix: basePrefix,
      tiers: new Set(),
    };
  }
  BRANCH_REGISTRY[key].tiers.add(unit.tier);
});

const BRANCH_CONFIG = Object.values(BRANCH_REGISTRY)
  .map((info) => {
    const tiers = Array.from(info.tiers).sort((a, b) => b - a);
    return {
      key: info.key,
      label: info.label,
      prefix: info.prefix,
      tiers,
      defaultTier: tiers[0],
    };
  })
  .sort((a, b) => a.label.localeCompare(b.label));

const numberFormatter = new Intl.NumberFormat("en-US");
const percentFormatter = new Intl.NumberFormat("en-US", { style: "percent", minimumFractionDigits: 1, maximumFractionDigits: 1 });

const leadershipInput = document.getElementById("leadership-input");
const cushionInput = document.getElementById("cushion-input");
const targetHealthInput = document.getElementById("target-health-input");
const branchControlsContainer = document.getElementById("branch-controls");
const resultTableBody = document.querySelector("#result-table tbody");
const summaryEl = document.getElementById("summary");
const warningEl = document.getElementById("warning");
const branchElements = {};

// LocalStorage keys
const STORAGE_KEY = "stacking-calc-settings";
const CHECKED_UNITS_KEY = "stacking-calc-checked-units";

// Load settings from localStorage
function loadSettings() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    return saved ? JSON.parse(saved) : null;
  } catch (e) {
    console.warn("Failed to load settings from localStorage:", e);
    return null;
  }
}

// Save settings to localStorage
function saveSettings() {
  try {
    const settings = {
      leadership: leadershipInput.value,
      cushion: cushionInput.value,
      targetHealth: targetHealthInput.value,
      branches: {}
    };
    
    Object.entries(branchElements).forEach(([key, entry]) => {
      settings.branches[key] = {
        enabled: entry.checkbox.checked,
        maxTier: entry.select.value,
        enabledTiers: Array.from(entry.enabledTiers)
      };
    });
    
    localStorage.setItem(STORAGE_KEY, JSON.stringify(settings));
  } catch (e) {
    console.warn("Failed to save settings to localStorage:", e);
  }
}

// Load checked units from localStorage
function loadCheckedUnits() {
  try {
    const saved = localStorage.getItem(CHECKED_UNITS_KEY);
    return saved ? new Set(JSON.parse(saved)) : new Set();
  } catch (e) {
    console.warn("Failed to load checked units from localStorage:", e);
    return new Set();
  }
}

// Save checked units to localStorage
function saveCheckedUnits(checkedUnits) {
  try {
    localStorage.setItem(CHECKED_UNITS_KEY, JSON.stringify(Array.from(checkedUnits)));
  } catch (e) {
    console.warn("Failed to save checked units to localStorage:", e);
  }
}

// Track which units have been added to army
let checkedUnits = loadCheckedUnits();

// Track current results for army progress calculation
let currentResults = [];

function getBranchUnlockedTiers(entry) {
  const maxTier = Number(entry.select.value);
  return entry.config.tiers.filter((tier) => tier <= maxTier).sort((a, b) => b - a);
}

function getBranchActiveTiers(entry) {
  return getBranchUnlockedTiers(entry).filter((tier) => entry.enabledTiers.has(tier));
}

function updateTierControls(branchKey) {
  const entry = branchElements[branchKey];
  if (!entry) {
    return;
  }

  const unlocked = getBranchUnlockedTiers(entry);
  const isEnabled = entry.checkbox.checked;

  // Remove enabled tiers that are no longer unlocked
  for (const tier of [...entry.enabledTiers]) {
    if (!unlocked.includes(tier)) {
      entry.enabledTiers.delete(tier);
    }
  }

  entry.tierGrid.innerHTML = "";

  if (!unlocked.length) {
    const noTiersMsg = document.createElement("div");
    noTiersMsg.className = "tier-toggle-header";
    noTiersMsg.textContent = "No tiers unlocked.";
    entry.toggleLabel.replaceWith(noTiersMsg);
    entry.toggleLabel = noTiersMsg;
    return;
  }

  const headerRow = document.createElement("div");
  headerRow.className = "tier-toggle-header";
  
  const headerLabel = document.createElement("span");
  headerLabel.textContent = "Select tiers to use";
  headerLabel.className = "tier-toggle-label-text";
  
  const clearButton = document.createElement("button");
  clearButton.className = "tier-clear-btn";
  clearButton.textContent = "Clear all";
  clearButton.disabled = !isEnabled;
  clearButton.addEventListener("click", () => {
    entry.enabledTiers.clear();
    updateTierControls(branchKey);
    updateBranchSummary(branchKey);
    updateResults();
    saveSettings();
  });
  
  const selectAllButton = document.createElement("button");
  selectAllButton.className = "tier-clear-btn";
  selectAllButton.textContent = "Select all";
  selectAllButton.disabled = !isEnabled;
  selectAllButton.addEventListener("click", () => {
    unlocked.forEach(tier => entry.enabledTiers.add(tier));
    updateTierControls(branchKey);
    updateBranchSummary(branchKey);
    updateResults();
    saveSettings();
  });
  
  headerRow.append(headerLabel, selectAllButton, clearButton);
  entry.toggleLabel.replaceWith(headerRow);
  entry.toggleLabel = headerRow;

  unlocked.forEach((tier) => {
    const label = document.createElement("label");
    label.className = "tier-checkbox";

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.value = tier;
    checkbox.checked = entry.enabledTiers.has(tier);
    checkbox.disabled = !isEnabled;
    checkbox.addEventListener("change", () => {
      if (checkbox.checked) {
        entry.enabledTiers.add(tier);
      } else {
        entry.enabledTiers.delete(tier);
      }
      updateBranchSummary(branchKey);
      updateResults();
      saveSettings();
    });

    label.append(checkbox, document.createTextNode(`${entry.config.prefix}${tier}`));
    entry.tierGrid.append(label);
  });
}

function updateBranchSummary(branchKey) {
  const entry = branchElements[branchKey];
  if (!entry) {
    return;
  }

  const { checkbox, summary } = entry;

  if (!checkbox.checked) {
    summary.textContent = "Not included in this hero stack.";
    return;
  }

  const unlocked = getBranchUnlockedTiers(entry);
  if (!unlocked.length) {
    summary.textContent = "No tiers unlocked for this branch.";
    return;
  }

  const active = getBranchActiveTiers(entry);
  if (!active.length) {
    summary.textContent = "No tiers selected for this branch.";
    return;
  }

  const prefix = entry.config.prefix;
  const highest = active[0];
  const lowest = active[active.length - 1];
  let message = highest === lowest
    ? `Using only ${prefix}${highest}.`
    : `Using ${prefix}${highest} down to ${prefix}${lowest}.`;

  const excluded = unlocked.filter((tier) => !entry.enabledTiers.has(tier));
  if (excluded.length) {
    message += ` Excluded: ${excluded.map((tier) => `${prefix}${tier}`).join(", ")}.`;
  }

  summary.textContent = message;
}

function renderBranchControls() {
  const savedSettings = loadSettings();
  
  branchControlsContainer.innerHTML = "";
  BRANCH_CONFIG.forEach((branch) => {
    const card = document.createElement("div");
    card.className = "branch-card";

    const topRow = document.createElement("div");
    topRow.className = "branch-top";

    const toggleLabel = document.createElement("label");
    toggleLabel.className = "branch-toggle";
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = true;
    const toggleText = document.createElement("span");
    toggleText.textContent = branch.label;
    toggleLabel.append(checkbox, toggleText);

    const range = document.createElement("span");
    range.className = "branch-range";
    const minTier = branch.tiers[branch.tiers.length - 1];
    range.textContent = `Tiers ${minTier}-${branch.tiers[0]}`;

    topRow.append(toggleLabel, range);

    const tierLabel = document.createElement("label");
    tierLabel.className = "branch-tier";
    const tierText = document.createElement("span");
    tierText.textContent = "Highest tier available";
    const select = document.createElement("select");
    branch.tiers.forEach((tier) => {
      const option = document.createElement("option");
      option.value = tier;
      option.textContent = `${branch.prefix}${tier} · Tier ${tier}`;
      select.append(option);
    });
    select.value = branch.defaultTier;
    tierLabel.append(tierText, select);

    const summary = document.createElement("p");
    summary.className = "branch-summary";

    const toggleWrapper = document.createElement("div");
    toggleWrapper.className = "branch-tier-toggle";
    const tierToggleLabel = document.createElement("div");
    tierToggleLabel.className = "tier-toggle-header";
    tierToggleLabel.textContent = "Disable tiers";
    const tierGrid = document.createElement("div");
    tierGrid.className = "tier-checkbox-grid";
    toggleWrapper.append(tierToggleLabel, tierGrid);

    card.append(topRow, tierLabel, summary, toggleWrapper);
    branchControlsContainer.append(card);

    // Load saved settings or use defaults
    const branchSettings = savedSettings?.branches?.[branch.key];
    const initialEnabled = branchSettings?.enabled ?? true;
    const initialMaxTier = branchSettings?.maxTier ?? branch.defaultTier;
    const initialEnabledTiers = branchSettings?.enabledTiers 
      ? new Set(branchSettings.enabledTiers)
      : new Set(branch.tiers); // Default: all tiers enabled

    checkbox.checked = initialEnabled;
    select.value = initialMaxTier;

    branchElements[branch.key] = {
      checkbox,
      select,
      summary,
      config: branch,
      toggleLabel: tierToggleLabel,
      tierGrid,
      enabledTiers: initialEnabledTiers,
    };

    checkbox.addEventListener("change", () => {
      select.disabled = !checkbox.checked;
      updateTierControls(branch.key);
      updateBranchSummary(branch.key);
      updateResults();
      saveSettings();
    });

    select.addEventListener("change", () => {
      updateTierControls(branch.key);
      updateBranchSummary(branch.key);
      updateResults();
      saveSettings();
    });

    select.disabled = !checkbox.checked;
    updateTierControls(branch.key);
    updateBranchSummary(branch.key);
  });
  
  // Load saved input values
  if (savedSettings) {
    if (savedSettings.leadership) leadershipInput.value = savedSettings.leadership;
    if (savedSettings.cushion) cushionInput.value = savedSettings.cushion;
    if (savedSettings.targetHealth) targetHealthInput.value = savedSettings.targetHealth;
  }
  
  updateResults();
}

function getSelectedUnits() {
  const activeTierCache = new Map();
  const units = TROOPS.filter((unit) => {
    const entry = branchElements[unit.branch];
    if (!entry || !entry.checkbox.checked) {
      return false;
    }

    if (!activeTierCache.has(entry)) {
      const activeTiers = getBranchActiveTiers(entry);
      activeTierCache.set(entry, activeTiers.length ? new Set(activeTiers) : null);
    }

    const activeTierSet = activeTierCache.get(entry);
    return activeTierSet ? activeTierSet.has(unit.tier) : false;
  });

  // Define role priority: flying > mounted > melee > ranged
  const rolePriority = {
    flying: 1,
    mounted: 2,
    melee: 3,
    ranged: 4
  };

  return units.sort((a, b) => {
    // First: sort by tier (descending - highest tier first)
    if (b.tier !== a.tier) {
      return b.tier - a.tier;
    }
    
    // Second: sort by branch (Guards before Specialists)
    if (a.branch !== b.branch) {
      return a.branch.localeCompare(b.branch);
    }
    
    // Third: sort by role priority
    const aPriority = rolePriority[a.role] || 999;
    const bPriority = rolePriority[b.role] || 999;
    return aPriority - bPriority;
  });
}

function computeRecommendation() {
  const leadershipCap = Number(leadershipInput.value) || 0;
  const cushionPercent = Math.max(0, Number(cushionInput.value) || 0);
  const cushionMultiplier = 1 + cushionPercent / 100;
  const targetHealth = Math.max(1000, Number(targetHealthInput.value) || 1000000);
  const units = getSelectedUnits();

  if (!leadershipCap || leadershipCap <= 0) {
    return { error: "Set a leadership cap above zero.", rows: [], totals: null };
  }

  if (!units.length) {
    return { error: "Enable at least one troop branch and tier to build a hero stack.", rows: [], totals: null };
  }

  // Group units by tier for proper health balancing
  const tierGroups = new Map();
  units.forEach(unit => {
    if (!tierGroups.has(unit.tier)) {
      tierGroups.set(unit.tier, []);
    }
    tierGroups.get(unit.tier).push(unit);
  });
  
  const tiers = Array.from(tierGroups.keys()).sort((a, b) => b - a);
  const highestTier = tiers[0];
  
  // Each unit type should get roughly equal health
  // To achieve this, we give each unit a target health, then convert to units
  // Apply cushion multiplier to lower tiers
  const enrichedUnits = units.map((unit) => {
    const tierIndex = tiers.indexOf(unit.tier);
    const cushionBoost = Math.pow(cushionMultiplier, tierIndex);
    
    // Each unit type gets an equal share of target health (before cushion)
    // targetHealth is the baseline, cushionBoost increases it for lower tiers
    const unitTargetHealth = targetHealth * cushionBoost;
    
    // Convert target health to number of units
    const unitsNeeded = unitTargetHealth / unit.health;
    
    // Weight by leadership for allocation
    const leadershipWeight = unitsNeeded * unit.leadership;
    
    return {
      unit,
      tierIndex,
      relativeUnits: unitsNeeded,
      leadershipWeight,
      expectedUnits: 0,
      assignedUnits: 0,
      fraction: 0,
    };
  });

  const totalRelativeLeadership = enrichedUnits.reduce((sum, entry) => sum + entry.leadershipWeight, 0);

  if (totalRelativeLeadership === 0) {
    return { error: "Unable to compute ratios for the selected units.", rows: [], totals: null };
  }

  // Scale the relative units to fit within leadership cap
  const scale = leadershipCap / totalRelativeLeadership;
  
  enrichedUnits.forEach((entry) => {
    const expectedUnits = entry.relativeUnits * scale;
    entry.expectedUnits = expectedUnits;
    entry.assignedUnits = Math.floor(expectedUnits);
    entry.fraction = expectedUnits - entry.assignedUnits;
  });

  let usedLeadership = enrichedUnits.reduce((sum, entry) => sum + entry.assignedUnits * entry.unit.leadership, 0);

  // Distribute remaining leadership starting with the largest fractional components.
  let leftover = leadershipCap - usedLeadership;
  if (leftover >= Math.min(...enrichedUnits.map((entry) => entry.unit.leadership))) {
    const fractionalOrder = [...enrichedUnits].sort((a, b) => b.fraction - a.fraction);
    fractionalOrder.forEach((entry) => {
      if (leftover >= entry.unit.leadership && entry.fraction > 0) {
        entry.assignedUnits += 1;
        leftover -= entry.unit.leadership;
      }
    });
  }

  usedLeadership = enrichedUnits.reduce((sum, entry) => sum + entry.assignedUnits * entry.unit.leadership, 0);
  leftover = leadershipCap - usedLeadership;

  // Ensure the highest tier is represented when there is enough leadership to field at least one.
  if (enrichedUnits[0].assignedUnits === 0 && leadershipCap >= enrichedUnits[0].unit.leadership) {
    let required = enrichedUnits[0].unit.leadership - Math.max(0, leftover);
    const donors = enrichedUnits
      .slice(1)
      .filter((entry) => entry.assignedUnits > 0)
      .sort((a, b) => a.unit.health - b.unit.health); // peel from the weakest units first

    for (const donor of donors) {
      while (donor.assignedUnits > 0 && required > 0) {
        donor.assignedUnits -= 1;
        usedLeadership -= donor.unit.leadership;
        required -= donor.unit.leadership;
      }
      if (required <= 0) {
        break;
      }
    }

    if (required <= 0) {
      enrichedUnits[0].assignedUnits = 1;
      usedLeadership += enrichedUnits[0].unit.leadership;
      leftover = leadershipCap - usedLeadership;
    }
  }

  const totalHealth = enrichedUnits.reduce((sum, entry) => sum + entry.assignedUnits * entry.unit.health, 0);
  const highestHealthPool = enrichedUnits[0].assignedUnits * enrichedUnits[0].unit.health || 1;

  const rows = enrichedUnits.map((entry) => {
    const leadershipUsed = entry.assignedUnits * entry.unit.leadership;
    const healthPool = entry.assignedUnits * entry.unit.health;
    const healthShare = totalHealth > 0 ? healthPool / totalHealth : 0;
    const relativeToTop = healthPool && highestHealthPool ? healthPool / highestHealthPool : 0;
    const notes = entry.tierIndex === 0
      ? "Top tier"
      : `${((relativeToTop - 1) * 100).toFixed(1)}% vs top tier`;
    return {
      id: entry.unit.id,
      name: entry.unit.name,
      role: entry.unit.role,
      tier: entry.unit.tier,
      branch: entry.unit.branch,
      leadershipUsed,
      assignedUnits: entry.assignedUnits,
      healthPool,
      healthShare,
      notes,
    };
  });

  return {
    rows,
    totals: {
      leadershipCap,
      usedLeadership,
      leftover,
      totalHealth,
      topTier: enrichedUnits[0].unit.id,
      healthPerLeadership: usedLeadership ? totalHealth / usedLeadership : 0,
      cushionPercent,
    },
    warning: enrichedUnits[0].assignedUnits === 0 ? "Leadership cap is too low for the hero to include the top tier." : "",
  };
}

function formatNumber(value) {
  if (value === undefined || value === null || Number.isNaN(value)) {
    return "-";
  }
  return numberFormatter.format(value);
}

function formatLeadership(leadership) {
  return `${formatNumber(leadership)} pts`;
}

function formatPercent(value) {
  return percentFormatter.format(value);
}

function updateArmyProgress() {
  const progressFill = document.getElementById("army-progress-fill");
  const progressText = document.getElementById("army-progress-text");
  
  if (!currentResults.length) {
    progressFill.style.width = "0%";
    progressText.textContent = "0 / 0";
    return;
  }
  
  // Calculate total leadership from checked units
  let checkedLeadership = 0;
  let totalLeadership = 0;
  
  currentResults.forEach(row => {
    const unitKey = `${row.id}-${row.assignedUnits}`;
    totalLeadership += row.leadershipUsed;
    if (checkedUnits.has(unitKey)) {
      checkedLeadership += row.leadershipUsed;
    }
  });
  
  const percentage = totalLeadership > 0 ? (checkedLeadership / totalLeadership) * 100 : 0;
  progressFill.style.width = `${percentage}%`;
  progressText.textContent = `${formatNumber(checkedLeadership)} / ${formatNumber(totalLeadership)}`;
  
  // Change color based on progress
  if (percentage >= 100) {
    progressFill.style.background = "linear-gradient(90deg, #10b981, #059669)";
  } else if (percentage >= 75) {
    progressFill.style.background = "linear-gradient(90deg, #3b82f6, #2563eb)";
  } else if (percentage >= 50) {
    progressFill.style.background = "linear-gradient(90deg, #eab308, #ca8a04)";
  } else {
    progressFill.style.background = "linear-gradient(90deg, #94a3b8, #64748b)";
  }
}

function updateResults() {
  const { rows, totals, error, warning } = computeRecommendation();
  resultTableBody.innerHTML = "";
  
  // Store current results for army progress calculation
  currentResults = rows;

  if (error) {
    summaryEl.innerHTML = "";
    warningEl.textContent = error;
    warningEl.classList.remove("hidden");
    currentResults = [];
    updateArmyProgress();
    return;
  }

  if (!rows.length || !totals) {
    summaryEl.innerHTML = "";
    warningEl.classList.add("hidden");
    currentResults = [];
    updateArmyProgress();
    return;
  }

  warningEl.textContent = warning || "";
  warningEl.classList.toggle("hidden", !warning);

  // Group rows by tier for visual organization
  let currentTier = null;
  rows.forEach((row, index) => {
    const unitTier = row.tier;
    
    // Add tier header when tier changes
    if (currentTier !== unitTier) {
      const tierHeaderRow = document.createElement("tr");
      tierHeaderRow.className = `tier-header tier-${unitTier}`;
      tierHeaderRow.innerHTML = `
        <td colspan="7" class="tier-header-cell">
          <span class="tier-badge">Tier ${unitTier}</span>
        </td>
      `;
      resultTableBody.append(tierHeaderRow);
      currentTier = unitTier;
    }
    
    // Extract base unit ID (remove role suffix like -F, -M, -R, -ML)
    const baseId = row.id.replace(/-(F|M|R|ML)$/, '');
    
    const tr = document.createElement("tr");
    tr.className = `tier-${unitTier}-row`;
    const unitKey = `${row.id}-${row.assignedUnits}`;
    const isChecked = checkedUnits.has(unitKey);
    
    if (isChecked) {
      tr.classList.add('checked-row');
    }
    
    tr.innerHTML = `
      <td class="check-cell">
        <input type="checkbox" class="unit-checkbox" data-unit-key="${unitKey}" ${isChecked ? 'checked' : ''}>
      </td>
      <td><strong>${baseId}</strong></td>
      <td><span class="role-badge role-${row.role}">${row.role}</span></td>
      <td>${formatNumber(row.assignedUnits)}</td>
      <td>${formatLeadership(row.leadershipUsed)}</td>
      <td>${formatNumber(row.healthPool)}</td>
      <td>${formatPercent(row.healthShare)}</td>
      <td>${row.notes}</td>
    `;
    
    // Add click handler for checkbox
    const checkbox = tr.querySelector('.unit-checkbox');
    checkbox.addEventListener('change', (e) => {
      e.stopPropagation();
      const key = checkbox.dataset.unitKey;
      if (checkbox.checked) {
        checkedUnits.add(key);
        tr.classList.add('checked-row');
      } else {
        checkedUnits.delete(key);
        tr.classList.remove('checked-row');
      }
      saveCheckedUnits(checkedUnits);
      updateArmyProgress();
    });
    
    // Allow clicking anywhere on row to toggle checkbox
    tr.addEventListener('click', (e) => {
      if (e.target.type !== 'checkbox') {
        checkbox.checked = !checkbox.checked;
        checkbox.dispatchEvent(new Event('change'));
      }
    });
    
    resultTableBody.append(tr);
  });

  const leftoverLabel = totals.leftover > 0
    ? `${formatLeadership(totals.leftover)} spare`
    : totals.leftover < 0
      ? `${formatLeadership(Math.abs(totals.leftover))} over cap`
      : "uses full leadership";

  summaryEl.innerHTML = `
    Hero deploys <strong>${formatLeadership(totals.usedLeadership)}</strong> of
    <strong>${formatLeadership(totals.leadershipCap)}</strong> —
    ${leftoverLabel}. Total stack health:
    <strong>${formatNumber(totals.totalHealth)}</strong>. Lower-tier padding:
    <strong>${totals.cushionPercent}%</strong>.
  `;
  
  // Update army progress bar
  updateArmyProgress();
}

function initEvents() {
  leadershipInput.addEventListener("input", () => {
    updateResults();
    saveSettings();
  });
  cushionInput.addEventListener("input", () => {
    updateResults();
    saveSettings();
  });
  targetHealthInput.addEventListener("input", () => {
    updateResults();
    saveSettings();
  });
  
  // Clear checked units button
  const clearCheckedBtn = document.getElementById("clear-checked-btn");
  clearCheckedBtn.addEventListener("click", () => {
    checkedUnits.clear();
    saveCheckedUnits(checkedUnits);
    updateResults();
    updateArmyProgress();
  });
}

initEvents();
renderBranchControls();
