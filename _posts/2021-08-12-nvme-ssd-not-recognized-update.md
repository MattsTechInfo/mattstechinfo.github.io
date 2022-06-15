---
title: NVMe SSD not recognized - Update
date: 2021-08-12 22:05:10 +01:00
category: [Documentation,Tutorials]
tags: [documentation,homelab,storage,nvme,esxi,vsphere6.7,vsphere7,troubleshooting,tutorial]
---

This is a quick revisit of two older posts that have been extremely popular and found by most visitors of my blog coming from all over the internet.

## VMware Flings driver
William Lam, Wenchao Cui and Yibo Dong have bundled their strengths to develop a community driver to be used with ESXi for several NVMe drives that stopped working. You know, the ones requiring the hacks with rolling back or installing older drivers to make them work. Before you jump right in though, there are a few caveats you have to keep in mind. It will not work for everything! You can find the community driver at the [VMware Flings website ⧉](https://flings.vmware.com/community-nvme-driver-for-esx){:target="_blank"}{:rel="noopener noreferrer"}.

## Your path to a working NVMe drive
Like I said above, there are some caveats, unfortunately the community drivers don't support all known NVMe drives out there. In fact, at the time of writing this only the following NVMe drives are supported:

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
5. If the PCIVID and/or ProductID don't show for your device, try findin it in the list of `esxcli hardware pci list`.

Now, based on the results you end up with one of the following options:

### My VendorID and ProductID match

#### ESXi 6.7
You can download and install the community driver.

1. Download version `nvme-community-driver_1.0.1.0-1vmw.670.0.0.8169922-offline_bundle-17658145.zip`
2. Upload the zip to your ESXi hosts `/tmp` folder.
3. Install by using
```console
esxcli software vib install -d /tmp/nvme-community-driver_1.0.1.0-1vmw.670.0.0.8169922-offline_bundle-17658145.zip
```

#### ESXi 7.0
You can download and install the community driver.

1. Download version `nvme-community-driver_1.0.1.0-2vmw.700.1.0.15843807-component-18290856.zip`
2. Upload the zip to your ESXi hosts `/tmp` folder.
3. Install by using
```console
esxcli software vib install -d /tmp/nvme-community-driver_1.0.1.0-2vmw.700.1.0.15843807-component-18290856.zip
```

### My VendorID matches but not the ProductID

#### ESXi 6.7
You can try the community driver, success is not guaranteed but it can probably work, follow the steps above for "My VendorID and ProductID match, I use ESXi6.7"
If your NVMe drive is still not visible after these steps, the community driver will unfortunately not work with your drive.
Please follow the steps in this post: [NVMe SSD not recognized 6.7U1+](/posts/nvme-ssd-not-recognized-6-7u1/)

#### ESXi 7.0
You can try the community driver, success is not guaranteed but it can probably work, follow the steps above for "My VendorID and ProductID match, I use ESXi6.7"
If your NVMe drive is still not visible after these steps, the community driver will unfortunately not work with your drive.
Please follow the steps in this post: [NVMe SSD not recognized 7.0](/posts/nvme-ssd-not-recognized-7-0/)

### None of the ID's match at all
You are out of luck, please follow the steps from my previous blogposts to get it working manually.

For ESXi 6.7: [NVMe SSD not recognized 6.7U1+](/posts/nvme-ssd-not-recognized-6-7u1/)
For ESXi 7.0: [NVMe SSD not recognized 7.0](/posts/nvme-ssd-not-recognized-7-0/)


## Conclusion
That concludes this post and you should now have a working NVMe drive!