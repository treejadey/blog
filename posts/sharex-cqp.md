---
title: Constant quantization (CQP) in ShareX
published_at: 2024-12-06T13:13:20.087Z
snippet: Modifying the FFmpeg parameters in ShareX to use CQP instead of CBR.
---

# TL;DR

Enable custom commands and replace the normal CBR bitrate setting, which is
like:

```sh
-b:v 6000k
```

With:

```sh
-rc constqp -cq 24
```

- `-rc constqp` enables CQP
- `-cq 24` sets the quantization to 24

# The story

I'm a big fan of high quality recordings, and I'm an even bigger fan of small
file sizes, which is exactly why I love CQP.

CQP or "Constant Quantization Parameter" is a Variable Bitrate setting which
basically reduces or increases the bitrate to maintain a similar video quality
for each second of the video. Higher quantization means less overall quality for
the video.

In my OBS settings, for recordings, I always enable CQP with Nvidia or CRF with
x264 because it makes desktop screen recordings super high quality but with
really small filesizes, small enough to shove the video straight into a discord
server, where the maximum file size for non paying "citizens" is like 10 MBs.
(Well it used to be 8 MBs then they updated it to 25 MBs and then down to 10 MBs
but that's not the point of this post)

I am also a big fan of ShareX and while using the video recording option in it,
as usual, I realised that I should probably enable CQP in it too, but it doesn't
come with any kind of CQP options if you're using the H264 Nvidia option.

![ShareX settings. Video encoder is set to "H.264 / NVENC." Only option for video recording is constant bitrate, which is set to 6000](https://i.treuks.com/zJNq9)

After seeing that it does not have a CQP option, I started googling for how to
enable CQP in ffmpeg, which is where I realised that it is very much not
documented.

So I jumped straight into the word meatgrinder (with my meatgrinder of choice
being LLama 3.1 70B of the duckduckgo variety), put in the arguments used by
ShareX, and asked it to modify the arguments so it will use CQP instead of CBR.
It told me that I should remove `-b:v 6000k` and replace it with
`-rc constqp -cqp 18`, which ended up not working, because `-cqp` isn't a real
argument. It is actually `-cq`.

After enabling custom commands, I replaced the bitrate setting with the before
mentioned arguments and it worked. The ffmpeg params which I ended up having
are:

```sh
-f dshow -thread_queue_size 1024 -rtbufsize 256M -audio_buffer_size 80 -framerate $fps$ -i video="screen-capture-recorder":audio="virtual-audio-capturer" -c:v h264_nvenc -r $fps$ -preset p4 -tune hq -rc constqp -cq 24 -movflags +faststart -c:a aac -ac 2 -b:a 128k -y "$output$"
```

Only difference is that I changed the constant quality parameter to be 24
instead of 18, because having a slightly lower quality is totally fine for me.
