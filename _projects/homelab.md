---
layout: project
title: Homelab
date: 2019-09-17 16:39:00 +01:00
updated: 2022-06-19 15:31:00 +01:00
toc: true
comments: true
image:
  path: /assets/img/projects/homelab/homelab-header.jpg
---

I use my homelab to practice all kinds of setups; all tutorials, manuals and studies for certification are done and made within the homelab. What started off with 2 hosts and 32GB memory soon turned into an environment where I could do virtually anything.<br />
In my eyes, having the homelab enables me to develop myself much better than without, it’s a crucial part of me as a guy that loves technology.

## Roadmap
As with any homelab, the improvements never end. There is so much I'd like to add, upgrade or change it's impossible to list them all. I've made a list of things I will have to (or want to) upgrade and change in the near future.

- [ ] Move away from the Fortinet VPN and switch to Wireguard for everything.
- [ ] Upgrade router to enable 10Gb/s WAN connectivity (Upgrade to 8Gb/s fiber incoming).
- [ ] Find an efficient low-power 4x 10Gb/s SFP+, 24x 10Gb/s Base-T and at least 8 PoE enabled ports.
- [ ] Look for a new WiFi solution, current Aerohive are very limited due to licenses.
- [ ] Get my hands on a Jetson Xavier NX for a real-time inferencing (STT/TTS) local Voice Assistant.
- [ ] Investigate possibilities to further reduce power consumption.
- [ ] Find a replacement for the APC UPS, since it wastes a lot of power.
- [ ] Sound-proof the technical room when everything is in place.

## Servers
### Custom built 2U server
This server is the only server in the homelab that's running 24/7. I've built it myself to set it up for the lowest power consumption possible while keeping performance up to my needs, it has an average continuous power consumption of 60W. For a full (initial build) walkthrough please see the blog-post [Homelab Update](/posts/homelab-update). This server runs VMware vSphere 7 and contains all kinds of virtual clusters (Kubernetes for example). All home automation appliances are virtually running on this server as well. 

Specifications:
- 1x Intel Xeon-D 1541 CPU (8 cores, 16 threads)
- 128GB (4x32GB) DDR4 ECC-Reg Memory
- 1+1 Redundant 550W Power Supply
- 2x 10Gb/s SFP+ Network Interfaces
- 3x 14TB Seagate EXOS X16 Enterprise SAS HDD's
- 4x 1TB Samsung 860 EVO SATA SSD's
- 2x 512GB XPG Gammix S11 Pro NVMe's

### DELL R630 1U server
This server is currently turned off and is only used for big test projects with high performance and memory needs. I still have to update the exact specifications but the following list will give a general idea. Due to the server being packed with high-end performance hardware, the power consumption is too high for me to run continuously from within my home.

Specifications:
- 2x Intel Xeon (24 cores, 48 threads)
- 768GB (24x32GB) DDR4 ECC-Reg Memory
- 4x 10Gb/s SFP+ Network Interfaces
- 4x 16Gb/s HBA's
- No storage

### DELL R610 1U server
This server is used during our LAN-parties, it's fully virtualized and configured to set up all infrastructure required during the LAN-party. Think about things like Routing, DHCP, DNS, Download Caching, Gameservers, Central File Repo, Adblocking services etc. 

Specifications:
- 2x Intel Xeon L5640 CPU (12 cores, 24 threads)
- 96GB (12x8GB) DDR3 ECC-Reg Memory
- 2x 10Gb/s SFP+ Network Interfaces
- 2x 900GB DELL SAS HDD's
- 4x 500GB Samsung EVO 860 SSD's

## Networking
The current network consists of a few different devices I've collected over the years. There are two switches, one is the main switch connecting the servers to the network at 10Gb/s and the other switch is a small one for the PoE devices on the network. There is one physical router/firewall appliance, all other routing is done virtually. My current ISP activated Full Dual-Stack IP access, which means my network is connected both on IPv4 and IPv6 externally and internally.

### Fortinet Fortigate 30D
The Fortigate 30D is an old small business firewall appliance that has proven it's worth over the years. It's officially EOL (End Of Life) and is no longer supported but still functions with the latest updates. I've reached routed NAT speeds of 1Gb/s which is very nice at the maximum portspeed, but it will need to be replaced in the future due to upgrading my internet access to 8Gb/s fiber. For now it's being used as the main gateway and firewall connected to the internet, L3 device for multiple VLANs, OSPF and BGP routing and VPN access.

### TP-Link JetStream T1700G-28TQ
The TP-Link switch was an attempt to find a reasonably priced 10Gb/s SFP+ capable managed switch. Although pestered with some bugs (none showstopping), the switch accepts DAC cables and SFP’s of different brands, which is great. It connects all my servers based on SFP+. It’s also capable of jumbo frames. There are also 24x 1Gb/s ports available for regular copper cables to connect the rest of the house's network devices.

### ZyXEL GS1900-8HP
At my previous job we used ZyXEL as all our main networking devices at small companies. Almost anything you need in a switch for a small pricetag, this 8 port PoE is no difference. This switch is one of the few switches in the world that does passively cooled PoE, that means, no fan noise! Next to that, it’s managed and also supports jumbo frames. This switch provides network access and power to the camera's and WiFi accesspoints in the house. 

### Aerohive AP250
All WiFi in the house and lab has been replaced by Aerohive devices. The house has three AP250's installed, connected to the ZyXEL PoE switch for power.
Unfortunately Aerohive is no longer what it used to be in my opnion, the new cloud management is nasty and I'm looking to replace all three accesspoints with something else. It's a shame, because these AP's are very expensive to buy. The yearly renewal licenses however really pushed me into this decision as they don't make any sense at all for a lab environment.

## Miscellaneous
My homelab is set up in a separate technical room with a raised floor (like in a datacenter) that will be sound-proofed in the future when everything is done. I'm using the following things to make everything work in the homelab.

### HP S10614 (14U) Rack
All harware is located inside a small rack. This rack is a 14U full size (depth) server rack. It’s quite hard to find a fitting rack when working with full size servers in a small space. Fortunately I found this used rack for a reasonable price. It';s currently being used barebones without the doors, sides etc. bolted on. It can be pushed around with the wheels underneath if necessary.

### APC SmartUPS 3000VA
To make sure all equipment doesn’t get fried or instantly get killed due to a power outage, an APC UPS is available, it might be a bit overkill for just a single server continuously running, but it does make sure it stays healthy. In the end, it’s a lot of expensive equipment for an individual to run. The UPS has about 1 to 2 hours runtime during a power failure.

### Power to the rack
My electrician did a professional power setup with two separate phases, both having 16 Amps of power at 230 Volts available. One phase for active power and another for redundant power in case active power fails. Electricity is mostly generated by our solar panels on the roof.

## Old Hardware
The following hardware was once part of the homelab but has either been replaced or removed, but not forgotten.

| Item                   | Specs                    | Reason                                 |
|:---------------------- |:------------------------ |:---------------------------------------|
| DELL R720 2U           | 2x E5-2630L, 192GB DDR3  | Replaced by custom server, power usage |
| DELL R610 1U           | 2x L5640, 98GB DDR3      | Replaced, CPU too old, power usage     |
| DELL R610 1U           | 2x E5620, 96GB DDR3      | Replaced, CPU too old, power usage     |
| DELL R610 1U           | Spare parts donor        | No longer necessary                    |
| Aerohive AP122         | Entry accesspoint        | Replaced by 3x AP250                   |