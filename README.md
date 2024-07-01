# Honkai: Star Rail Daily Check Inator

## Getting your cookie

You have to check in manually first to get your cookie, follow these steps:

1. Open [HoYoLAB](https://www.hoyolab.com/home)
2. Go to Honkai: Star Rail check in page (on the sidebar, change the game with dropdown)
3. Open dev tool (Ctrl+Shift+I or right click > Inspect)
4. Find the Network tab
5. Claim your check in reward
6. There will be a lot of requests on the dev tool, look for the one with name `sign`. You can use filter to find it.
7. Click on the `sign` request
8. Click the Headers tab
9. Scroll below until you find `Cookie:`
10. Copy the texts beside it

## Usage

1. Fork this repo
2. Open the forked repository
3. Go to Settings > Secrets and variables > Actions
4. Click on New repository secrets
5. Insert COOKIE on Name field
6. Copy your cookie on Secret field
