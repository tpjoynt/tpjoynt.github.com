---
layout: post
title: "Let There Be Surround Sound"
description: "My adventure with Dolby Pro Logic, XBMC and Linux audio"
category: technical
tags: [mediapc]
---
{% include JB/setup %}

## The Problem

I've been setting up a media PC for my parents - it's a hobby when I'm home. When watching a movie, I noticed that certain scenes that should utilize surround sound weren't coming through. We have an old audio receiver -  a Denon AVR-810. State of the art at it's time, it's now a relic from the late 80's / early 90's. However, it is equipped with surround sound, in the form of [Dolby Pro Logic](http://en.wikipedia.org/wiki/Dolby_Pro_Logic#Dolby_Pro_Logic). Pro Logic uses [matrix encoding](http://en.wikipedia.org/wiki/Matrix_decoder) to get 4.0 channels through 2 (L/R). I did a speaker test (`speaker-test -c 6`), and confirmed what I had suspected - the surround wasn't working. The center and rear channels weren't coming through on their own.

## The Solution

For this next part to make sense, take a quick glance at the [awesomely verbose linux audio stack](http://upload.wikimedia.org/wikipedia/commons/0/00/Pulseaudio-diagram.svg), specifically ALSA and Pulseaudio.

The first thing I stumbled upon was ALSA's implementation of the Dolby Pro Logic encoder. Once that was enabled, I was able to speaker test and hear the 4.0 channels.

The next step was to wire up this new audio output to my HTPC software, [XBMC](xbmc.org). Eventually, I removed Pulseaudio entirely, since it was just getting in the way between XBMC and my ALSA device.

Here is the final config, which goes in `~/.asoundrc`. To supplement the comments, here's a [useful doc outlining PCM plugins in ALSA](http://www.alsa-project.org/alsa-doc/alsa-lib/pcm_plugins.html).

    <confdir:pcm/dpl.conf>

    #defines raw ports, use plug for auto conversion
    pcm.analogport {
	    type hw
	    card 1
	    device 0
    }

    pcm.analogplug {
	    type plug
	    slave.pcm "analogport"
    }

    #Default audio device - covert to Dolby Pro Logic and send to analog plug
    pcm.!default {
    type plug
    slave.pcm {
	        type upmix
	        slave.pcm "dpl:analogplug"
	        channels 6
	    }
    }

    #Default control device
    ctl.!default {
        type hw
        card 1
    }
    
Once I had this in place, my default sound device supported Dolby Pro Logic. `speaker-test -D default -c 6` produces true 4.0 output, and by setting audio output XBMC to Default (ALSA), movies and videos do as well. Because it's the default audio device, the menu sounds of XBMC go through the stereo as well.

## Troubleshooting

This solution came through much trial and error, and in the process I've acquired a wealth of troubleshooting knowledge.

### Unable to initialize audio device (XBMC)

This came up _a lot_, and could be any number of things. First, make sure you've either opened XBMC in a terminal and can read the console output, or are otherwise tailing the log output (`tail -f ~/.xbmc/temp/xbmc.log`). A couple of messages I ran into were:

* Device or resource busy

Most of the time, this was because it was in use by Pulseaudio. Even if the device isn't the default device, if it is enabled, Pulse has a lock and ALSA cannot do anything with the device. In order to check this, I used the pulse audio volume control app (`pavucontrol`). The configuration tab has the option to select the output for your audio devices, with the option to turn it off all together. If you don't feel like uninstalling pulse this is a good way to unlock your devices and test ALSA.

* Invalid parameter

Not the exact message, but something like that. This could be a number of reasons, but I finally reduced mine to the fact that I was using 5.1 sound on a 2.0 device. This normally isn't a problem, but I had ALSA configured to talk directly to the hardware ([hw ALSA PCM plugin](http://www.alsa-project.org/alsa-doc/alsa-lib/pcm_plugins.html#pcm_plugins_hw)), and not the plug ([plug ALSA PCM plugin](http://www.alsa-project.org/alsa-doc/alsa-lib/pcm_plugins.html#pcm_plugins_plug)) which converts the stream for me.

To troubleshoot anything else, do a speaker test. If it works, check the output of either the log or the console. If that doesn't tell you anything useful, try tinkering with the audio settings - there are a couple of flags (AC3, etc.) that can cause trouble if the device doesn't support it.
