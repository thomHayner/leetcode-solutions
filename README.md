# LeetCode Solutions

This is a repo of my LeetCode solutions. It is set to automatically sync with the LeetCode.com web application at 10:45 PM UTC every day.

[![Sync Leetcode](https://github.com/thomHayner/leetcode-solutions/actions/workflows/sync_leetcode.yml/badge.svg)](https://github.com/thomHayner/leetcode/actions/workflows/sync_leetcode.yml)

## Automations
This repo uses the LeetCode Sync action from [@joshcai](https://github.com/joshcai), available on the GitHub Marketplace [here](https://github.com/marketplace/actions/leetcode-sync).

More information on this workflow, and how to set one up for yourself, can be found in the original repo's README.md file, located [here](https://github.com/joshcai/leetcode-sync/blob/master/README.md).

## Setup Help and Troubleshooting

### Finding your LeetCode Secrets (Aug 2024)
1. Navigate to LeetCode and Log in
2. Cmd+Opt+I to open your dev console (Mac / Chrome)
3. Click on the "Application" tab
4. Find your LeetCode secrets to copy and paste into GitHub
![leetcode_inspect_application](https://github.com/user-attachments/assets/e9e23d51-4684-4357-944d-15dcb7357a9a)

### Adding you LeetCode Secrets to your GitHub repo
1. Navigate to your GitHub repo
2. On the top tab bar, click on the "Settings" tab
3. On the left sidebar, click on the "Secrets and variables" dropdown
4. Choose the "Actions" option
5. Click on the "New repository secret" button
6. Add your secrets
![settings_secrets_actions_newRepositorySecret](https://github.com/user-attachments/assets/d347276a-9c98-4204-b11b-6b67de77fa19)

### Job fails with error message: "HttpError: Resource not accessible by integration"
1. Navigate to your GitHub repo
2. On the top tab bar, click on the "Settings" tab
3. On the left sidebar, click on the "Actions" dropdown
4. Choose the "General" option
5. Scroll down to the "Workflow permissions" section, choose the "Read and write permissions" radio button option
6. Click on the "Save" button
![settings_actions_workflowPermissions](https://github.com/user-attachments/assets/67027c8a-87a1-4c5e-b50f-709ca268bfb5)

