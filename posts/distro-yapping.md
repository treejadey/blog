---
title: That is not a Linux distro. It is a config.
published_at: 2025-09-25T08:44:16.877Z
snippet: We need more labels, people.
---

Ubuntu and Debian are distros.

Fedora Atomic and Bazzite are distros.

Arch is a distro, CachyOS is a distro.

But they're not the same.

Ubuntu has a similar workflow to Debian, it has the same kinds of software and
both have the same package manager (apt), but at the same time, they're not
always compatible and they're not even supposed to be.

What about, for example, Bazzite. What's the difference between Bazzite and
Fedora Atomic?

Well, Bazzite is just Fedora Atomic but with different settings and other
different preinstalled stuff, it targets a different workflow and a different
kind of audience.

Coming from Fedora Atomic, Bazzite would be pretty much just, yknow, Fedora
Atomic, but slightly different.

CachyOS and Arch? If you hide all of the branding, it would be hard to tell the
difference.

## So what's a distribution, something ducks walk on?

A Linux distro is quite literally, a distribution of the linux kernel, as well
as other software. Most likely, alongside the kernel, your average linux distro
might feature GNU coreutils, systemd, something like grub or systemd-boot, and
something like dracut.

So, now we know what a linux distro is, but why am I making the article?

I'm making the article because, by the definition, any kind of distributed
distro which comes with an installer or something is a distribution, but I feel
like there are some cases which would benefit from having a more specific label.

If I will make a distro based on NixOS, and the only difference from NixOS is
the default configs being changed, can I really call it a linux distribution?

By the prior definition of "linux distro", it would count as a linux distro,
because it is a literal distribution of linux.

But in terms of my own personal feelings, it feels significantly different,
than, for example, Ubuntu being derived from Debian. That is because Debian and
Ubuntu are different enough where you don't really see them as one thing.

If someone makes some crappy collection of packages and configs for Arch and
Hyprland, and distributes it, and somehow earns money from it, it would count as
a distro, and I can't say it is not, because under the definition it is. But it
also feels wrong.

How can this count as it's own thing when it's clearly not??

## We need clearer naming schemes

As a solution, we can come up with linux distro tiers.

- Root tier - A distro which is directly responsible for packaging and
  distributing software. Has it's own infrastructure. For example, Debian, Arch,
  NixOS, Fedora. It is usually the one other distros are based on.
- Derivative tier - A distro which is based on some sort of other distro, such
  as Ubuntu being based on Debian, or for example, SteamOS being based on Arch.
  It might be aimed towards a specific group or workflow, but uses preexisting
  infrastructure, while maybe adding some on top. The key thing is that it is
  either incompatible, or does not aim to be compatible with the original
  distribution it derives from.
- Config tier - A distro which adds some stuff on top of a preexisting distro
  without significantly altering anything, especially anything on the backend.
  It is entirely compatible with the distro it is based on.

Think, for example, I cannot run Ubuntu software on Debian without recompiling.
That's because, while Ubuntu is kind of based on Debian, it has it's own
infrastructure and it's own packages, and the release cycle is dramatically
different. Debian packages are more "stable". This is why i'd call it a
**derivative tier** distro.

Meanwhile, something like CachyOS is a **config tier** distribution of Arch.

They are just Arch but with preinstalled stuff. CachyOS is just Arch but aimed
to be slightly more user friendly and comes with it's own repository of packages
which are meant to be compatible with Arch Linux.

But, at the same time, there's also a weird inbetween scenario. SteamOS is based
on Arch, uses Arch packages, and by all means _is_ an Arch distro, but it is
dramatically different to Arch.. **IF** you do not activate the command to make
it mutable, and **IF** you do not set the system password which would allow you
to use sudo. I guess that makes it more of an.. uhhh.. _semi-derivative tier
distro?_

I don't know.
