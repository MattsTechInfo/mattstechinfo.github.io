---
title: Homelab Update
date: 2020-03-24 13:01:00 +01:00
category: [Homelab,Servers]
tags: [homelab,server,hardware]
---

Something completely different I want to share with you. I have quite an extensive homelab and wasn’t actually in the market for a new one, however I saw a deal on eBay.

## Why?
For the past year I’ve been monitoring my electricity usage, being in a climate neutral house that generates more electricity than it uses, it became more and more apparent that a power hungry homelab really doesn’t fit. Even though it’s for work and/or my career and it doesn’t count towards the calculation of being climate neutral, I wanted to see if I could try and fit it in anyway. I was planning to do this at a much later date (in a few years), but along came a motherboard listing on eBay in the US which was the motherboard I was dreaming of!
And so it happened…

## What?
My current setup consists of three DELL rackservers, two R610’s and one R720XD. Together they use about 600W of power, the two R610’s turned off most the time leaves the R720XD running 24/7 at 220W.

Ideally I wanted to bring that down to around 50W and not compromise performance for 24/7 usage. This basically means you have to go Intel Xeon-D, which is a so called SoC (System on [a] Chip). These buggers are expensive! With some specifications I’d like just the motherboard with a Xeon-D would cost me at least 2000 euro, that’s without anything else, just a motherboard with a soldered on CPU! And even that was a price if they were available at all.

Then two weeks back I stumbled upon a listing, three new in box motherboards with every single thing on board I was hoping for. And it was cheap (in comparison!) at 600 USD. The ordering, and soon building, could start.

## Bill of Materials (BOM)
Time to get some stuff!

| Product                                                      | Amount | Cost      |
|:------------------------------------------------------------:|:------:|:---------:|
| [ASRock Rack D1541D4U-2O8R ⧉](https://www.asrockrack.com/general/productdetail.asp?Model=D1541D4U-2O8R#Specifications){:target="_blank"}{:rel="noopener noreferrer"} <br /> _8 core, 16 threads Xeon-D_ | 1      | €550      |
| [Samsung M393A4K40CB2-CTD ⧉](https://www.samsung.com/semiconductor/dram/module/M393A4K40CB2-CTD/){:target="_blank"}{:rel="noopener noreferrer"} <br /> _32GB DDR4 ECC-Reg_          | 2      | €225      |
| [Fantec SRC-2612X07 ⧉](https://www.fantec.de/produkte/serverprodukte/19-server-storagegehaeuse/produkt/details/artikel/2163_fantec_src_2612x07/){:target="_blank"}{:rel="noopener noreferrer"} <br /> _12×3.5″ bays 2U rackmount_        | 1      | €220      |
| [FANTEC SRC-SR20 ⧉](https://www.fantec.de/produkte/serverprodukte/zubehoer/produkt/details/artikel/1671_fantec_src_sr20/){:target="_blank"}{:rel="noopener noreferrer"} <br /> _19″ rack rails_                      | 1      | €26       |
| [Inter-Tech R2A-DV0550-N ⧉](https://www.inter-tech.de/en/products/psu/server-psu/aspower-r2a-dv0550-n){:target="_blank"}{:rel="noopener noreferrer"} <br /> _2U 1+1 redundant 550W PSU_   | 1      | €266      |
| [Inter-Tech SAS cable ⧉](https://www.inter-tech.de/products/cable/data-cable/cable-88885005){:target="_blank"}{:rel="noopener noreferrer"} <br /> _0.75m SFF 8643 -> 8087_         | 2      | €39       |
| [Delock SAS cable ⧉](https://www.delock.com/produkt/83322/merkmale.html){:target="_blank"}{:rel="noopener noreferrer"} <br /> _SFF-8087-> 4x SATA Reverse_         | 1      | €31       |
| __Total__                                                    |        | __€1357__ |

## Some extra info
During the build I ran into some annoyances, as the documentation of the rackmount and the rails were pretty much non-existent I had to find out that some screw holes were in the wrong place and didn’t align with the power supply, fortunately most of them did line up and the PSU is mounted rock solid. There is also a slight metal edge which almost makes it impossible to swap the lower PSU out in case it fails.

The second annoying part was that the rails are supposed to give a full extension of the rackmount for easy access, well, it’s like 20cm short…

## Power draw
The motherboard I’m extremely happy with, it’s easy to work with, IPMI works a charm, it has connectors for more things I’d ever want. Four case fans are connected to it, it’s extremely quiet and still keeping it cool.
Only thing I’d wish for is a virtual console based on HTML5 instead of Java.

But hey, this is amazing! It’s currently sitting there running at a stunning 32W! Holy smokes! This is still without extra disks (currently 1 SSD) but this is absolutely worth it. With the cost of electricity here in Holland I’ll recoup the whole cost of this server within two to three years.

## Final thoughts
Now I still have to finish the build completely with disks and I’m still waiting on the SAS to 4x SATA reverse cable, but so far I’m stoked and really happy I jumped on the eBay listing for this motherboard.

## Build pictures
![Unboxed Case](https://mattsbos.pro/wp-content/uploads/2020/03/IMG_20200319_185640-1024x768.jpg)
_19 inch rack case unboxed_
![PSU Screws](https://mattsbos.pro/wp-content/uploads/2020/03/IMG_20200319_195227-1024x768.jpg)
_PSU screw holes on the left left dont align with case_
![PSU Mount](https://mattsbos.pro/wp-content/uploads/2020/03/IMG_20200319_200046-768x1024.jpg)
_PSU mount backside_
![Motherboard in Case](https://mattsbos.pro/wp-content/uploads/2020/03/IMG_20200319_202057-768x1024.jpg)
_Motherboard mounted in case_
![Motherboard IO](https://mattsbos.pro/wp-content/uploads/2020/03/IMG_20200319_202327-1024x768.jpg)
_Motherboard I/O shield_
![PSU to SAS](https://mattsbos.pro/wp-content/uploads/2020/03/IMG_20200319_210735-768x1024.jpg)
_Connecting PSU cables to SAS backplane_
![Internals connected](https://mattsbos.pro/wp-content/uploads/2020/03/IMG_20200320_161804-768x1024.jpg)
_All internals connected_
![Racked](https://mattsbos.pro/wp-content/uploads/2020/03/IMG_20200321_174904-1024x768.jpg)
_Racked underneath the R720XD_
