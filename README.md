# Total Battle Stacking Calculator

A powerful, interactive calculator for optimizing troop stacks in Total Battle. Calculate the optimal distribution of units across different tiers and roles to maximize your army's effectiveness within your hero's leadership cap.

## Features

- **Multi-tier Support**: Guards (G1-G7) and Specialists (S1-S9) across all roles
- **All Unit Roles**: Melee, Ranged, Mounted, and Flying units
- **Smart Balancing**: Automatically balances health across all selected unit types
- **Tier-based Color Coding**: Visual tier identification with game-accurate colors
- **Flexible Cushion System**: Add extra health padding to lower tiers for customized strategies
- **Auto-save Settings**: Your selections and preferences persist across sessions
- **Responsive Design**: Works on desktop and mobile devices

## How to Use

1. **Set Your Leadership Cap**: Enter your hero's maximum leadership capacity (default: 50,000)
2. **Choose Stack Balance**: Adjust the padding percentage to give lower tiers more health if desired
3. **Select Branches**: Enable Guards and/or Specialists
4. **Pick Your Tiers**: Select the highest tier you've unlocked for each branch
5. **Fine-tune Selection**: Choose which specific tiers to include in your stack
6. **View Results**: See your optimal stack composition grouped by tier with health distribution

## Live Demo

Visit the calculator: [GitHub Pages URL will be here]

## Local Development

Run locally with Python's built-in web server:

```bash
./run.sh
```

Then open http://localhost:8000 in your browser.

## Tech Stack

- Pure JavaScript (no frameworks)
- CSS3 with dark theme
- HTML5
- LocalStorage for settings persistence

## Game Information

Total Battle is a strategy game where troop composition matters. This calculator helps you:
- Balance unit strength across tiers
- Maximize total army health
- Account for different leadership costs (Flying units cost 20 leadership for Guards, 1 for Specialists)
- Plan optimal mixed-tier stacks

## Contributing

Feel free to open issues or submit pull requests for improvements!

## License

MIT License - Feel free to use and modify!

