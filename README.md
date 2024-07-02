# Honkai: Star Rail Daily Check Inator

Today's check in status:
[![Daily Check In](../../actions/workflows/login.yml/badge.svg)](../../actions/workflows/login.yml)

## Getting your cookie

You have to check in manually first to get your cookie, follow these steps (click to open screenshot):

1. Open [HoYoLAB](https://www.hoyolab.com/home) and login if you haven't (obviously)
2. <details>
   <summary>Go to Honkai: Star Rail check in page (on the sidebar, change the game with dropdown)</summary>
   <img src="https://github.com/sglkc/hsr-login/assets/31957516/4aaabfc5-c381-4594-b1e6-edd720481da4" />
   </details>

3. <details>
   <summary>Open dev tool (Ctrl+Shift+I or right click > Inspect)</summary>
   <img src="https://github.com/sglkc/hsr-login/assets/31957516/69dd00c6-dda6-4793-a767-b8c71d1e235b" />
   </details>
   
4. <details>
   <summary>Click on the Network tab</summary>
   <img src="https://github.com/sglkc/hsr-login/assets/31957516/1cd64325-e0d8-43fa-8c7a-e7be209db6f0" />
   </details>

5. <details>
   <summary>Claim your check in reward</summary>
   <img src="https://github.com/sglkc/hsr-login/assets/31957516/dadf0093-08fa-489f-93e3-d4532333b681" />
   </details>
   
6. <details>
   <summary>There will be a lot of requests on the dev tool, look for the one with name `sign`. You can use filter to find it.</summary>
   <img src="https://github.com/sglkc/hsr-login/assets/31957516/5e7dae2a-c871-48a2-9f0c-d400a6a4a06d" />
   </details>
   
7. <details>
   <summary>Click on the <code>sign</code> request, one with more details</summary>
   <img src="https://github.com/sglkc/hsr-login/assets/31957516/51c25b17-e415-44e4-99a9-90bacbfea25f" />
   </details>
   
8. <details>
   <summary>Click the Headers tab</summary>
   <img src="https://github.com/sglkc/hsr-login/assets/31957516/4d508021-f6c2-4291-99a1-f9a774183a84" />
   </details>
   
9. <details>
   <summary>Scroll below until you find `Cookie:`</summary>
   <img src="https://github.com/sglkc/hsr-login/assets/31957516/515db106-038a-46c1-af13-a130413623ab" />
   </details>
   
10. Copy the content beside it
12. That's your cookie, keep it save and do NOT share it with anyone!

## Usage

1. Fork this repo
2. Open the forked repository
3. <details>
   <summary>Go to Settings > Secrets and variables > Actions</summary>
   <img src="https://github.com/sglkc/hsr-login/assets/31957516/134a2c25-0345-4a46-b84f-5fa928031e5a" />
   </details>
   
4. <details>
   <summary>Click on New repository secrets</summary>
   <img src="https://github.com/sglkc/hsr-login/assets/31957516/9d77c1d2-60e5-4dd0-a5d4-3b81c1bf0321" />
   </details>
   
5. <details>
   <summary>Insert COOKIE on Name field</summary>
   <img src="https://github.com/sglkc/hsr-login/assets/31957516/9a450ba4-a155-4a0e-8a48-d730a3be5c73" />
   </details>
   
6. Copy your [cookie](#getting-your-cookie) on Secret field
7. Click on Add secret
8. You're set!

You can check your check in status everyday on top of this README file.
