# Honkai: Star Rail Daily Check Inator

Today's check in status:
[![If you see this text, chances are the automation hasn't run. Do your setup below!](../../actions/workflows/login.yml/badge.svg)](../../actions/workflows/login.yml)

## Table of Contents

- [Getting your cookie](#getting-your-cookie)
- [Usage](#usage)
- [FAQ](#faq)

## Getting your cookie

You have to check in manually first to get your cookie, follow these steps (click to open screenshot):

1. Open [HoYoLAB](https://www.hoyolab.com/home) and login if you haven't (obviously)

2. <details>
   <summary>Open dev tool (<kbd>Ctrl+Shift+I</kbd> or right click > Inspect)</summary>
   <img src="https://github.com/sglkc/hoyolab-auto-daily/assets/31957516/81a57cfa-9f2e-48d7-bec6-5ef4edc3b857" />
   </details>

4. <details>
   <summary>Click on the Application tab. If not found, click the arrow.</summary>
   <img src="https://github.com/sglkc/hoyolab-auto-daily/assets/31957516/ea4bb233-367c-4c41-8c66-30c2bc2f3150" />
   </details>

5. <details>
   <summary>On the filter box, type <code>v2</code>. You might want to expand the dev tools to see clearly.</summary>
   <img src="https://github.com/sglkc/hoyolab-auto-daily/assets/31957516/bf1eec5f-bb1e-4af2-b37b-3c3c252328db" />
   </details>

6. <details>
   <summary>Find <code>ltoken_v2</code> and <code>ltuid_v2</code>, click on them, and copy the value below.</summary>
   <img src="https://github.com/sglkc/hoyolab-auto-daily/assets/31957516/3ce70d90-6d5d-4353-ab35-8476c44124a1" />
   </details>

7. <details>
   <summary>Write <code>ltuid_v2=(PASTE ltuid_v2); ltoken_v2=(PASTE ltoken_v2)</code> like the screenshot.</summary>

   I write the line on the browser url to make it easier. Pay attention, use semicolon (;) and not colon (:)

   <img src="https://github.com/sglkc/hoyolab-auto-daily/assets/31957516/4309fcd9-3d6b-43f3-96f2-d8276bea6280" />
   </details>

9. Copy that. That's your cookie, keep it save and do NOT share it with anyone!

## Usage

1. [Fork this repo](../../fork)
2. Open your fork repository
3. <details>
   <summary>Go to Settings > Secrets and variables > Actions</summary>
   <img src="https://github.com/sglkc/hoyolab-auto-daily/assets/31957516/134a2c25-0345-4a46-b84f-5fa928031e5a" />
   </details>

4. <details>
   <summary>Click on New repository secrets</summary>
   <img src="https://github.com/sglkc/hoyolab-auto-daily/assets/31957516/9d77c1d2-60e5-4dd0-a5d4-3b81c1bf0321" />
   </details>

5. <details>
   <summary>Insert <code>COOKIE</code> on Name field</summary>
   <img src="https://github.com/sglkc/hoyolab-auto-daily/assets/31957516/9a450ba4-a155-4a0e-8a48-d730a3be5c73" />
   </details>

6. Copy your [cookie](#getting-your-cookie) on Secret field and click Add secret

7. Now add another repository secret with the name `GAMES`

8. <details>
   <summary>
      Insert game codes you want to check in, separated by a space like the example screenshot.<br/>
      Supported values are: <code>gi</code>, <code>hsr</code>, <code>hi3</code>, <code>tot</code>
   </summary>
   <img src="https://github.com/sglkc/hoyolab-auto-daily/assets/31957516/771641a2-ea10-4b97-82e0-7904ac6ab6fe" />
   </details>

9. <details>
   <summary>
      For the first day, you have to run this manually.
      Simply go <a href="../../actions/workflows/login.yml">HERE</a> and click on Run workflow
   </summary>
   <img src="https://github.com/sglkc/hoyolab-auto-daily/assets/31957516/ea1e48d2-a069-4db6-bdcd-86eecae8d81d" />
   </details>

10. <details>
    <summary>Wait for 10-20 secs, refresh, and see if it ran successfully. You should now see the check in status on top of README.</summary>
    <img src="https://github.com/sglkc/hoyolab-auto-daily/assets/31957516/5c8520ee-a8b7-4c66-bb1b-ef945c499112" />
    </details>

11. You're set! Hop on your game the next day and see if you got the rewards

## FAQ

1. Privacy

   This repository does NOT have any tracking nor anything sus, you can read the code yourself. Also keep your cookie safe!

2. Is this safe?

   There should be no issues, there hasn't been any reports about hoyo doing anything against check-in automation

3. I have an issue

   To the [Issues page](https://github.com/sglkc/hoyolab-auto-daily/issues)

4. How to update my fork?

   <details>
   <summary>Go to your repository and click Sync fork</summary>
   <img src="https://github.com/sglkc/hoyolab-auto-daily/assets/31957516/08c10262-8a97-433b-b499-143cc116184d" />
   </details>

5. Can I make my own script?

   Feel free to modify, this repository is [MIT licensed](LICENSE). BUT it's far better if you contribute here!
