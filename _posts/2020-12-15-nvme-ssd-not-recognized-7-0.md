---
title: NVMe SSD not recognized 7.0+
date: 2020-12-15 10:07:01 +01:00
category: [Documentation,Tutorials]
tags: [documentation,homelab,storage,nvme,esxi,vsphere7,troubleshooting,tutorial]
---

Earlier this year I ran into problems with consumer SSD’s not being recognized in ESXi 6.7U1 and higher due to a change in the NVMe driver that had to do with NVMe 1.3 specification. See the old post for background info.
It was now time for me to upgrade ESXi to 7.0 as I had already updated vCenter accordingly. Of course I knew I would run into the NVMe problem again, but this time it took another interesting turn as my previous solution didn’t work anymore.

> A lot has happened since this post was written, please start from this new post before continuing to make sure you won't waste your time!
{: .prompt-info }

> Please note: I am using non HCL hardware, the following is NOT supported by VMware, use at your own risk. Using HCL validated hardware will make sure you don’t have these problems.
{: .prompt-warning }

## The new problem
Because ESXi 7 is a whole new beast, a lot has changed with the drivers since version 6.7. When I updated to 7.0, my NVMe SSD’s didn’t show up as expected, but when I tried to install the old drivers I lost the complete host. It wasn’t actually dead, but with installing the older VIB’s it somehow interfered with the networking drivers rendering my host unusable as it didn’t have any network connection anymore.

Unfortunately, back to searching and troubleshooting. Since there were already multiple people having this same problem in the vExpert community troubleshooting started quite fast with multiple people available. After some time it appeared certain people actually gotten it to work with a solution that didn’t fix it for me, suddenly we are looking at multiple problems instead of just one.

## Multiple problems
From all the troubleshooting it seems there are now two different situations, in this blog post I will highlight the problem I’m having (problem one).
- Problem 1: Consumer NVMe stopped working 6.7U1+
- Problem 2: Consumer NVMe stopped working 7.0+

If you did __not__ have problems in 6.7U1+ and started having problems starting from 7.0, please [look at the following post by William Lam ⧉](https://www.virtuallyghetto.com/2020/04/important-nvme-ssd-not-found-after-upgrading-to-esxi-7-0.html){:target="_blank"}{:rel="noopener noreferrer"}.
If you did have problems (like me) starting in 6.7U1, please keep on reading.

## Solution to my problem (Problem one)
Right, so the old driver extracting and installing trick doesn’t work anymore and breaks multiple other ESXi drivers on 7.0+. After some more troubleshooting about VIB’s and what’s actually in there, the VIB’s build the bootbank drivers for ESXi. If you look at the `/bootbank` partition of an ESXi host you will find a lot of `<drivername>.v00` files. Apparently the old VIB’s don’t just touch NVMe drivers but also some others, the specific `nvme.v00` helps, as this is the fully built NVMe driver.

There are a few ways to get this file/driver:

- SFTP into the ESXi host on 6.7U1+ that already had the fix and copy `/bootbank/nvme.v00` to your PC.
- Download an ESXi 6.7 GA installer ISO and extract the `nvme.v00` file from there.
Since my ESXi host was destroyed by trying to install the old VIB’s I went with the second option. Any ESXI 6.7GA ISO is good, doesn’t matter if it’s a customized (DELL, HP, etc) one or an original VMware ISO. Just extract `NVME.V00` from the root of the ISO and save it somewhere.

(Optional, I needed it) I re-installed ESXi 7.0 on my host to make sure my VIB adventure didn’t leave anything bad in the drivers.

1. Rename the `NVME.V00` file to `nvme_pci.v00`, this is the new driver file name in 7.0.
2. SFTP to the ESXi host and go to `/bootbank`.
3. find the current `nvme_pci.v00` file and rename it so you have a backup (I renamed to `nvme_pci.v00.bk`).
4. Copy the `nvme_pci.v00` from your PC to the ESXi `/bootbank` folder.
5. Reboot ESXi.

The NVMe SSD is now visible again, working with the 6.7GA driver on 7.0!

![NVMe storage drives show again](https://mattsbos.pro/wp-content/uploads/2020/12/NVMe-ESXi-7-fixed-1024x97.png)
