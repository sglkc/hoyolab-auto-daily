# Hoyolab Auto Daily Check In

Today's check in status:
[![If you see this text, chances are the automation hasn't run. Do your setup below!](../../actions/workflows/login.yml/badge.svg)](../../actions/workflows/login.yml)

Repository version:
[![Do your setup!](../../actions/workflows/version.yml/badge.svg)](../../actions/workflows/version.yml)

## Table of Contents

- [Getting your cookie](#getting-your-cookie)
- [Usage](#usage)
- [Discord Webhook](#discord-webhook)
- [FAQ](#faq)
  - [Is this safe?](#is-this-safe)
  - [How to update my (fork) repository version?](#how-to-update-my-fork-repository-version)
  - [Error not logged in](#error-not-logged-in)
  - [I have other issues](#i-have-other-issues)

## Getting your cookie

You have to check in manually first to get your cookie, follow these steps (click to open screenshot):

1. Open [HoYoLAB](https://www.hoyolab.com/home) and login if you haven't (obviously)

2. <details>
   <summary>Open dev tool (<kbd>Ctrl+Shift+I</kbd> or right click > Inspect)</summary>
   <img src="https://github.com/sglkc/hoyolab-auto-daily/assets/31957516/81a57cfa-9f2e-48d7-bec6-5ef4edc3b857" />
   </details>

4. <details>
   <summary>For Chromium users, click on the Application tab. If not found, click on the arrow.</summary>
   <img src="https://github.com/sglkc/hoyolab-auto-daily/assets/31957516/ea4bb233-367c-4c41-8c66-30c2bc2f3150" />
   </details>
   <details>
   <summary>For Firefox/Gecko-based browsers, click on the Storage tab.</summary>
   <img src="https://github.com/user-attachments/assets/4e12c315-9a01-4ad8-9e5f-6197328e900f" />
   </details>

5. <details>
   <summary>On the filter box, type <code>v2</code>. You might want to expand the dev tools to see clearly.</summary>
   <img src="https://github.com/sglkc/hoyolab-auto-daily/assets/31957516/bf1eec5f-bb1e-4af2-b37b-3c3c252328db" />
   </details>

6. <details>
   <summary>Find <code>ltoken_v2</code> and <code>ltuid_v2</code>, click on them, and copy the value below.</summary>
   <img src="https://github.com/sglkc/hoyolab-auto-daily/assets/31957516/3ce70d90-6d5d-4353-ab35-8476c44124a1" />
   </details>

7. <details open>
   <summary>Write <code>ltuid_v2=PASTE_ltuid_v2; ltoken_v2=PASTE_ltoken_v2</code> like the screenshot.</summary>

   I write the line on the browser url to make it easier. Pay attention, use semicolon (;) and not colon (:)

   It should look like this: `ltuid_v2=249806310; ltoken_v2=v2_CAISDG...`

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
   <summary>
      Insert name with <code>COOKIE</code> and secret with
      <a href="#getting-your-cookie">your cookie</a>, then click Add secret
   </summary>
   <img src="https://github.com/sglkc/hoyolab-auto-daily/assets/31957516/9a450ba4-a155-4a0e-8a48-d730a3be5c73" />
   </details>

6. <details>
   <summary>Now for the games, go to Variables and click New repository variable</summary>
   <img src="https://github.com/sglkc/hoyolab-auto-daily/assets/31957516/5c6c226a-141c-41c2-82f5-8254b1741196" />
   </details>

7. <details>
   <summary>
      Insert name with <code>GAMES</code> and value with the game codes you want to check in, separated by space like the example screenshot.<br/>
      Supported values are: <code>zzz</code>, <code>gi</code>, <code>hsr</code>, <code>hi3</code>, <code>tot</code>
   </summary>
   <img src="https://github.com/sglkc/hoyolab-auto-daily/assets/31957516/01cd1a4b-16ae-4f3c-ba3e-cd3f913e44fa" />
   </details>

8. <details>
   <summary>
      For the first day, you have to trigger this manually.
      Simply go <a href="../../actions/workflows/login.yml">HERE</a> and click on Run workflow
   </summary>
   <img src="https://github.com/sglkc/hoyolab-auto-daily/assets/31957516/ea1e48d2-a069-4db6-bdcd-86eecae8d81d" />
   </details>

9. <details>
    <summary>Refresh the page, wait for 15-25 secs, and see if it ran successfully. You should now see the check in status on top of README.</summary>
    <img src="https://github.com/sglkc/hoyolab-auto-daily/assets/31957516/5c8520ee-a8b7-4c66-bb1b-ef945c499112" />
    </details>

10. You're set! Hop on your game the next day and see if you got the rewards

## Discord Webhook

You may use Discord webhook to send notifications to your channel!

1. <details>
   <summary>Go to channel settings</summary>
   <img src="https://github.com/sglkc/hoyolab-auto-daily/assets/31957516/80f3b2f1-cc55-4316-9153-3fc5026b7da8" />
   </details>

2. <details>
   <summary>Go to Integrations and click Create Webhook</summary>
   <img src="https://github.com/sglkc/hoyolab-auto-daily/assets/31957516/b4d0c07d-35a5-4382-99de-584c70c4d730" />
   </details>

3. <details>
   <summary>You can edit the name and picture freely, then Copy Webhook URL</summary>
   <img src="https://github.com/sglkc/hoyolab-auto-daily/assets/31957516/3df5b59c-edc9-4884-897c-9159e243598e" />
   </details>

4. <details>
   <summary>Create a new repository <em>variable</em> named <code>DISCORD_WEBHOOK</code> with value of the webhook URL</summary>
   <img src="https://github.com/sglkc/hoyolab-auto-daily/assets/31957516/15b029ff-906d-472c-b356-ae9efed4477b" />
   </details>

5. You may trigger the check in manually and see if the messages got sent

## FAQ

### Is this safe?

There should be no issues, automated check-in exists for years and there hasn't been any reports about hoyo doing anything against it

### How to update my (fork) repository version?

<details>
<summary>Go to your repository and click Sync fork</summary>
<img src="https://github.com/sglkc/hoyolab-auto-daily/assets/31957516/08c10262-8a97-433b-b499-143cc116184d" />
</details>

### Error not logged in

This is a common issue even if you seem to get the cookies right. Here's another method to get your cookies:

https://gist.github.com/torikushiii/59eff33fc8ea89dbc0b2e7652db9d3fd

Just copy everything and paste to the COOKIE secret

### I have other issues

To the [Issues page](https://github.com/sglkc/hoyolab-auto-daily/issues)
