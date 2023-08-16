---
title: ESXi 8 consumer NVMe SSD not recognized
date: 2023-08-16 12:05:10 +01:00
category: [Documentation,Tutorials]
tags: [documentation,homelab,storage,nvme,esxi,vsphere8,troubleshooting,tutorial]
image:
  path: /assets/img/posts/headers/nvme.jpg
---

This is an update for ESXi 8 in the "consumer NVMe SSD not being recognized since ESXi 6.7U1" series. Just like previous versions, several consumer NVMe controllers are having problems being recognized in ESXi 8. Although the VMware community fling has been deprecated due to default addition of some NVMe controllers from the fling to the ESXi 8 image, one controller brand is still left out. Specifically, Silicon Motion controllers, used by ADATA in almost all their NVMe drives and I'm sure they are in others.

## VMware Flings driver
As mentioned above, the community driver has officially been deprecated due to default driver additions to ESXi 8. However, this community driver still contains the Silicon Motion and ADATA drives to add support. Unfortunately this community driver was released only for ESXI 6.7 and 7, ESXi 8 is not supported.
Luckily, last weekend I was able to test ESXi 8 Update 1 on my server with ADATA NVMe drives and figured, why not just install the deprecated fling and see if it works! .... It worked!
Before you jump right in though, there are a few caveats you have to keep in mind. It will not work for every NVMe drive! You can find the community driver at the [VMware Flings website ⧉](https://flings.vmware.com/community-nvme-driver-for-esxi){:target="_blank"}{:rel="noopener noreferrer"}.

## Your path to a working NVMe drive
Like I said above, there are some caveats, unfortunately the community drivers don't support all known NVMe drives out there. In fact, at the time of writing this, only the following NVMe drives are supported by the community driver:

| Vendor         | VendorID | ProductID |
|:---------------|:---------|:----------|
| ADATA          | 0x1cc1   | 8201      |
| Micro/Crucial  | 0xc0a9   | 0x2263    |
| Silicon Motion | 0x126f   | 0x2262    |

To check if your NVMe drive is supported by this driver follow these steps:
1. Log onto your ESXi host (that has the NVMe installed).
2. Find the vmhbaX where X is the number assigned by ESXi that holds your NVMe drive.
3. Use `esxcli nvme device get -A vmhbaX` in the console, replace X with your number from the previous step.
4. Find the PCIVID (VendorID) and ProductID in the list.
5. If the PCIVID and/or ProductID don't show for your device, try finding it in the list of `esxcli hardware pci list`.

Now, based on the results you end up with one of the following options:

### My VendorID and ProductID match
You can download and install the community driver.
1. Download version `nvme-community-driver_1.0.1.0-3vmw.700.1.0.15843807-component-18902434`
2. Upload the zip to your ESXi hosts `/tmp` folder.
3. Install by using:
```console
esxcli software vib install -d /tmp/nvme-community-driver_1.0.1.0-3vmw.700.1.0.15843807-component-18902434
```
4. Reboot.

### My VendorID matches but not the ProductID
You can try the community driver, success is not guaranteed but it can probably work, follow the steps above for "My VendorID and ProductID match".

### None of the ID's match at all
You are out of luck, please follow the steps from my previous blogposts to try and get it working manually. There is absolutely no guarantee this will work by adding an old ESXi 6.7 driver to an ESXi 8 install. Please don't try this if you are not willing to do a complete reinstall!

[NVMe SSD not recognized 7.0](/posts/nvme-ssd-not-recognized-7-0/)

## Conclusion
That concludes this post and you should now have a working NVMe drive!