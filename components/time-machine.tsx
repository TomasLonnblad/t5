"use client"

import React from "react"
import { motion } from "framer-motion"
import { useShortcuts, clamp } from "@/hooks/use-shortcut"

const IMAGES = [

  "https://tomaslonnblad.github.io/9.jpg",
  "https://tomaslonnblad.github.io/10.jpg",
  "https://tomaslonnblad.github.io/11.jpg",
  "https://tomaslonnblad.github.io/12.jpg",
  "https://tomaslonnblad.github.io/13.jpg",
  "https://tomaslonnblad.github.io/14.jpg",
  "https://tomaslonnblad.github.io/15.jpg",
  "https://tomaslonnblad.github.io/16.jpg",
  "https://tomaslonnblad.github.io/17.jpg",
  "https://tomaslonnblad.github.io/18.jpg",
  "https://tomaslonnblad.github.io/19.jpg",
  "https://tomaslonnblad.github.io/20.jpg",
  "https://tomaslonnblad.github.io/21.jpg",
  "https://tomaslonnblad.github.io/22.jpg",
  "https://tomaslonnblad.github.io/23.jpg",
  "https://tomaslonnblad.github.io/24.jpg",
  "https://tomaslonnblad.github.io/25.jpg",
  "https://tomaslonnblad.github.io/26.jpg",
  "https://tomaslonnblad.github.io/27.jpg",
  "https://tomaslonnblad.github.io/28.jpg",
  "https://tomaslonnblad.github.io/29.jpg",
  "https://tomaslonnblad.github.io/30.jpg",
  "https://tomaslonnblad.github.io/31.jpg",
  "https://tomaslonnblad.github.io/32.jpg",
  "https://tomaslonnblad.github.io/33.jpg",
  "https://tomaslonnblad.github.io/34.jpg",
  "https://tomaslonnblad.github.io/35.jpg",
  "https://tomaslonnblad.github.io/36.jpg",
  "https://tomaslonnblad.github.io/37.jpg",
  "https://tomaslonnblad.github.io/38.jpg",
  "https://tomaslonnblad.github.io/39.jpg",
  "https://tomaslonnblad.github.io/40.jpg",
  "https://tomaslonnblad.github.io/41.jpg",
  "https://tomaslonnblad.github.io/42.jpg",
  "https://tomaslonnblad.github.io/43.jpg",
  "https://tomaslonnblad.github.io/44.jpg",
  "https://tomaslonnblad.github.io/45.jpg",
  "https://tomaslonnblad.github.io/46.jpg",
  "https://tomaslonnblad.github.io/47.jpg",
  "https://tomaslonnblad.github.io/48.jpg",
  "https://tomaslonnblad.github.io/49.jpg",
  "https://tomaslonnblad.github.io/50.jpg",
  "https://tomaslonnblad.github.io/51.jpg",
  "https://tomaslonnblad.github.io/52.jpg",
  "https://tomaslonnblad.github.io/53.jpg",
  "https://tomaslonnblad.github.io/54.jpg",
  "https://tomaslonnblad.github.io/55.jpg",
  "https://tomaslonnblad.github.io/56.jpg",
  "https://tomaslonnblad.github.io/57.jpg",
  "https://tomaslonnblad.github.io/58.jpg",
  "https://tomaslonnblad.github.io/59.jpg",
  "https://tomaslonnblad.github.io/60.jpg",
  "https://tomaslonnblad.github.io/61.jpg",
  "https://tomaslonnblad.github.io/62.jpg",
  "https://tomaslonnblad.github.io/63.jpg",
  "https://tomaslonnblad.github.io/64.jpg",
  "https://tomaslonnblad.github.io/65.jpg",
  "https://tomaslonnblad.github.io/66.jpg",
  "https://tomaslonnblad.github.io/67.jpg",
  "https://tomaslonnblad.github.io/68.jpg",
  "https://tomaslonnblad.github.io/69.jpg",
  "https://tomaslonnblad.github.io/70.jpg",
  "https://tomaslonnblad.github.io/71.jpg",
  "https://tomaslonnblad.github.io/72.jpg",
  "https://tomaslonnblad.github.io/73.jpg",
  "https://tomaslonnblad.github.io/74.jpg",
  "https://tomaslonnblad.github.io/75.jpg",
  "https://tomaslonnblad.github.io/76.jpg",
  "https://tomaslonnblad.github.io/77.jpg",
  "https://tomaslonnblad.github.io/78.jpg",
  "https://tomaslonnblad.github.io/79.jpg",
  "https://tomaslonnblad.github.io/80.jpg",
  "https://tomaslonnblad.github.io/81.jpg",
  "https://tomaslonnblad.github.io/82.jpg",
  "https://tomaslonnblad.github.io/82.jpg",
  "https://tomaslonnblad.github.io/84.jpg",
  "https://tomaslonnblad.github.io/85.jpg",
  "https://tomaslonnblad.github.io/86.jpg",
  "https://tomaslonnblad.github.io/87.jpg",
  "https://tomaslonnblad.github.io/88.jpg",
  "https://tomaslonnblad.github.io/89.jpg",
  "https://tomaslonnblad.github.io/90.jpg",
  "https://tomaslonnblad.github.io/91.jpg",
  "https://tomaslonnblad.github.io/92.jpg",
  "https://tomaslonnblad.github.io/93.jpg",
  "https://tomaslonnblad.github.io/94.jpg",
  "https://tomaslonnblad.github.io/95.jpg",
  "https://tomaslonnblad.github.io/96.jpg",
  "https://tomaslonnblad.github.io/97.jpg",
  "https://tomaslonnblad.github.io/98.jpg",
  "https://tomaslonnblad.github.io/99.jpg",
  "https://tomaslonnblad.github.io/100.jpg",
  "https://tomaslonnblad.github.io/101.jpg",
  "https://tomaslonnblad.github.io/102.jpg",
  "https://tomaslonnblad.github.io/103.jpg",
  "https://tomaslonnblad.github.io/104.jpg",
  "https://tomaslonnblad.github.io/105.jpg",
  "https://tomaslonnblad.github.io/106.jpg",
  "https://tomaslonnblad.github.io/107.jpg",
  "https://tomaslonnblad.github.io/108.jpg",
  "https://tomaslonnblad.github.io/109.jpg",
  "https://tomaslonnblad.github.io/110.jpg",
  "https://tomaslonnblad.github.io/111.jpg",
  "https://tomaslonnblad.github.io/112.jpg",
  "https://tomaslonnblad.github.io/113.jpg",
  "https://tomaslonnblad.github.io/113.jpg",
  "https://tomaslonnblad.github.io/114.jpg",
  "https://tomaslonnblad.github.io/115.jpg",
  "https://tomaslonnblad.github.io/116.jpg",
  "https://tomaslonnblad.github.io/117.jpg",
  "https://tomaslonnblad.github.io/118.jpg",
  "https://tomaslonnblad.github.io/119.jpg",
  "https://tomaslonnblad.github.io/120.jpg",
  "https://tomaslonnblad.github.io/121.jpg",
  "https://tomaslonnblad.github.io/122.jpg",
  "https://tomaslonnblad.github.io/123.jpg",
  "https://tomaslonnblad.github.io/124.jpg",
  "https://tomaslonnblad.github.io/125.jpg",
  "https://tomaslonnblad.github.io/126.jpg",
  "https://tomaslonnblad.github.io/127.jpg",
  "https://tomaslonnblad.github.io/128.jpg",
  "https://tomaslonnblad.github.io/129.jpg",
  "https://tomaslonnblad.github.io/130.jpg",
  "https://tomaslonnblad.github.io/131.jpg",
  "https://tomaslonnblad.github.io/132.jpg",
  "https://tomaslonnblad.github.io/133.jpg",
  "https://tomaslonnblad.github.io/134.jpg",
  "https://tomaslonnblad.github.io/135.jpg",
  "https://tomaslonnblad.github.io/136.jpg",
  "https://tomaslonnblad.github.io/137.jpg",
  "https://tomaslonnblad.github.io/138.jpg",
  "https://tomaslonnblad.github.io/139.jpg",
  "https://tomaslonnblad.github.io/140.jpg",
  "https://tomaslonnblad.github.io/141.jpg",
  "https://tomaslonnblad.github.io/142.jpg",
  "https://tomaslonnblad.github.io/143.jpg",
  "https://tomaslonnblad.github.io/144.jpg",
  "https://tomaslonnblad.github.io/145.jpg",
  "https://tomaslonnblad.github.io/146.jpg",
  "https://tomaslonnblad.github.io/147.jpg",
  "https://tomaslonnblad.github.io/148.jpg",
  "https://tomaslonnblad.github.io/149.jpg",
  "https://tomaslonnblad.github.io/150.jpg",
  "https://tomaslonnblad.github.io/151.jpg",
  "https://tomaslonnblad.github.io/152.jpg",
  "https://tomaslonnblad.github.io/153.jpg",
  "https://tomaslonnblad.github.io/154.jpg",
  "https://tomaslonnblad.github.io/155.jpg",
  "https://tomaslonnblad.github.io/156.jpg",
  "https://tomaslonnblad.github.io/157.jpg",
  "https://tomaslonnblad.github.io/158.jpg",
  "https://tomaslonnblad.github.io/159.jpg",
  "https://tomaslonnblad.github.io/160.jpg",
  "https://tomaslonnblad.github.io/161.jpg",
  "https://tomaslonnblad.github.io/162.jpg",
  "https://tomaslonnblad.github.io/163.jpg",
  "https://tomaslonnblad.github.io/164.jpg",
  "https://tomaslonnblad.github.io/165.jpg",
  "https://tomaslonnblad.github.io/166.jpg",
  "https://tomaslonnblad.github.io/167.jpg",
  "https://tomaslonnblad.github.io/168.jpg",
  "https://tomaslonnblad.github.io/169.jpg",
  "https://tomaslonnblad.github.io/170.jpg",
  "https://tomaslonnblad.github.io/171.jpg",
  "https://tomaslonnblad.github.io/172.jpg",
  "https://tomaslonnblad.github.io/173.jpg",
  "https://tomaslonnblad.github.io/174.jpg",
  "https://tomaslonnblad.github.io/175.jpg",
  "https://tomaslonnblad.github.io/176.jpg",
  "https://tomaslonnblad.github.io/177.jpg",
  "https://tomaslonnblad.github.io/178.jpg",
  "https://tomaslonnblad.github.io/179.jpg",
  "https://tomaslonnblad.github.io/180.jpg",
  "https://tomaslonnblad.github.io/181.jpg",
  "https://tomaslonnblad.github.io/182.jpg",
  "https://tomaslonnblad.github.io/183.jpg",
  "https://tomaslonnblad.github.io/184.jpg",
  "https://tomaslonnblad.github.io/185.jpg",
  "https://tomaslonnblad.github.io/186.jpg",
  "https://tomaslonnblad.github.io/187.jpg",
  "https://tomaslonnblad.github.io/188.jpg",
  "https://tomaslonnblad.github.io/189.jpg",
  "https://tomaslonnblad.github.io/190.jpg",
  "https://tomaslonnblad.github.io/191.jpg",
  "https://tomaslonnblad.github.io/192.jpg",
  "https://tomaslonnblad.github.io/193.jpg",
  "https://tomaslonnblad.github.io/194.jpg",
  "https://tomaslonnblad.github.io/195.jpg",
  "https://tomaslonnblad.github.io/196.jpg",
  "https://tomaslonnblad.github.io/197.jpg",
  "https://tomaslonnblad.github.io/198.jpg",
  "https://tomaslonnblad.github.io/199.jpg",
  "https://tomaslonnblad.github.io/200.jpg",
  "https://tomaslonnblad.github.io/201.jpg",
  "https://tomaslonnblad.github.io/202.jpg",
  "https://tomaslonnblad.github.io/203.jpg",
  "https://tomaslonnblad.github.io/204.jpg",
  "https://tomaslonnblad.github.io/205.jpg",
  "https://tomaslonnblad.github.io/206.jpg",
  "https://tomaslonnblad.github.io/207.jpg",
  "https://tomaslonnblad.github.io/208.jpg",
  "https://tomaslonnblad.github.io/209.jpg",
  "https://tomaslonnblad.github.io/210.jpg",
  "https://tomaslonnblad.github.io/211.jpg",
  "https://tomaslonnblad.github.io/212.jpg",
  "https://tomaslonnblad.github.io/213.jpg",
  "https://tomaslonnblad.github.io/214.jpg",
  "https://tomaslonnblad.github.io/215.jpg",
  "https://tomaslonnblad.github.io/216.jpg",
  "https://tomaslonnblad.github.io/217.jpg",
  "https://tomaslonnblad.github.io/218.jpg",
  "https://tomaslonnblad.github.io/219.jpg",
  "https://tomaslonnblad.github.io/220.jpg",
  "https://tomaslonnblad.github.io/221.jpg",
  "https://tomaslonnblad.github.io/222.jpg",
  "https://tomaslonnblad.github.io/223.jpg",
  "https://tomaslonnblad.github.io/224.jpg",
  "https://tomaslonnblad.github.io/225.jpg",
  "https://tomaslonnblad.github.io/226.jpg",
  "https://tomaslonnblad.github.io/227.jpg",
  "https://tomaslonnblad.github.io/228.jpg",
  "https://tomaslonnblad.github.io/229.jpg",
  "https://tomaslonnblad.github.io/230.jpg",
  "https://tomaslonnblad.github.io/231.jpg",
  "https://tomaslonnblad.github.io/232.jpg",
  "https://tomaslonnblad.github.io/233.jpg",
  "https://tomaslonnblad.github.io/234.jpg",
  "https://tomaslonnblad.github.io/235.jpg",
  "https://tomaslonnblad.github.io/236.jpg",
  "https://tomaslonnblad.github.io/237.jpg",
  "https://tomaslonnblad.github.io/238.jpg",
  "https://tomaslonnblad.github.io/239.jpg",
  "https://tomaslonnblad.github.io/240.jpg",
  "https://tomaslonnblad.github.io/241.jpg",
  "https://tomaslonnblad.github.io/242.jpg",
  "https://tomaslonnblad.github.io/243.jpg",
  "https://tomaslonnblad.github.io/244.jpg",
  "https://tomaslonnblad.github.io/245.jpg",
  "https://tomaslonnblad.github.io/246.jpg",
  "https://tomaslonnblad.github.io/247.jpg",
  "https://tomaslonnblad.github.io/248.jpg",
  "https://tomaslonnblad.github.io/249.jpg",
  "https://tomaslonnblad.github.io/250.jpg",
  "https://tomaslonnblad.github.io/251.jpg",
  "https://tomaslonnblad.github.io/252.jpg",
  "https://tomaslonnblad.github.io/253.jpg",
  "https://tomaslonnblad.github.io/254.jpg",
  "https://tomaslonnblad.github.io/255.jpg",
  "https://tomaslonnblad.github.io/256.jpg",
  "https://tomaslonnblad.github.io/257.jpg",
  "https://tomaslonnblad.github.io/258.jpg",
  "https://tomaslonnblad.github.io/259.jpg",
  "https://tomaslonnblad.github.io/260.jpg",
  "https://tomaslonnblad.github.io/261.jpg",
  "https://tomaslonnblad.github.io/262.jpg",
  "https://tomaslonnblad.github.io/263.jpg",
  "https://tomaslonnblad.github.io/264.jpg",
  "https://tomaslonnblad.github.io/265.jpg",
  "https://tomaslonnblad.github.io/266.jpg",
  "https://tomaslonnblad.github.io/267.jpg",
  "https://tomaslonnblad.github.io/268.jpg",
  "https://tomaslonnblad.github.io/269.jpg",
  "https://tomaslonnblad.github.io/270.jpg",
  "https://tomaslonnblad.github.io/271.jpg",
  "https://tomaslonnblad.github.io/272.jpg",
  "https://tomaslonnblad.github.io/273.jpg",
  "https://tomaslonnblad.github.io/274.jpg",
  "https://tomaslonnblad.github.io/275.jpg",
  "https://tomaslonnblad.github.io/276.jpg",
  "https://tomaslonnblad.github.io/277.jpg",
  "https://tomaslonnblad.github.io/278.jpg",
  "https://tomaslonnblad.github.io/279.jpg",
  "https://tomaslonnblad.github.io/280.jpg",
  "https://tomaslonnblad.github.io/281.jpg",
  "https://tomaslonnblad.github.io/282.jpg",
  "https://tomaslonnblad.github.io/283.jpg",
  "https://tomaslonnblad.github.io/284.jpg",
  "https://tomaslonnblad.github.io/285.jpg",
  "https://tomaslonnblad.github.io/286.jpg",
  "https://tomaslonnblad.github.io/287.jpg",
  "https://tomaslonnblad.github.io/288.jpg",
  "https://tomaslonnblad.github.io/289.jpg",
  "https://tomaslonnblad.github.io/290.jpg",
  "https://tomaslonnblad.github.io/292.jpg",
  "https://tomaslonnblad.github.io/292.jpg",
  "https://tomaslonnblad.github.io/284.jpg",
  "https://tomaslonnblad.github.io/285.jpg",
  "https://tomaslonnblad.github.io/286.jpg",
  "https://tomaslonnblad.github.io/287.jpg",
  "https://tomaslonnblad.github.io/288.jpg",
  "https://tomaslonnblad.github.io/289.jpg",
  "https://tomaslonnblad.github.io/290.jpg",
  "https://tomaslonnblad.github.io/291.jpg",
  "https://tomaslonnblad.github.io/292.jpg",
  "https://tomaslonnblad.github.io/292.jpg",
  "https://tomaslonnblad.github.io/294.jpg",
  "https://tomaslonnblad.github.io/295.jpg",
  "https://tomaslonnblad.github.io/296.jpg",
  "https://tomaslonnblad.github.io/297.jpg",
  "https://tomaslonnblad.github.io/298.jpg",
  "https://tomaslonnblad.github.io/299.jpg",
  "https://tomaslonnblad.github.io/300.jpg",
  "https://tomaslonnblad.github.io/301.jpg",
  "https://tomaslonnblad.github.io/302.jpg",
  "https://tomaslonnblad.github.io/303.jpg",
  "https://tomaslonnblad.github.io/304.jpg",
  "https://tomaslonnblad.github.io/305.jpg",
  "https://tomaslonnblad.github.io/306.jpg",
  "https://tomaslonnblad.github.io/307.jpg",
  "https://tomaslonnblad.github.io/308.jpg",
  "https://tomaslonnblad.github.io/309.jpg",
  "https://tomaslonnblad.github.io/310.jpg",
  "https://tomaslonnblad.github.io/311.jpg",
  "https://tomaslonnblad.github.io/312.jpg",
  "https://tomaslonnblad.github.io/313.jpg",
  "https://tomaslonnblad.github.io/314.jpg",
  "https://tomaslonnblad.github.io/315.jpg",
  "https://tomaslonnblad.github.io/316.jpg",
  "https://tomaslonnblad.github.io/317.jpg",
  "https://tomaslonnblad.github.io/318.jpg",
  "https://tomaslonnblad.github.io/319.jpg",
  "https://tomaslonnblad.github.io/320.jpg",
  "https://tomaslonnblad.github.io/321.jpg",
  "https://tomaslonnblad.github.io/322.jpg",
  "https://tomaslonnblad.github.io/323.jpg",
  "https://tomaslonnblad.github.io/324.jpg",
  "https://tomaslonnblad.github.io/325.jpg",
  "https://tomaslonnblad.github.io/326.jpg",
  "https://tomaslonnblad.github.io/227.jpg",
  "https://tomaslonnblad.github.io/328.jpg",
  "https://tomaslonnblad.github.io/329.jpg",
  "https://tomaslonnblad.github.io/330.jpg",
  "https://tomaslonnblad.github.io/331.jpg",
  "https://tomaslonnblad.github.io/332.jpg",
  "https://tomaslonnblad.github.io/333.jpg",
  "https://tomaslonnblad.github.io/334.jpg",
  "https://tomaslonnblad.github.io/335.jpg",
  "https://tomaslonnblad.github.io/336.jpg",
  "https://tomaslonnblad.github.io/337.jpg",
  "https://tomaslonnblad.github.io/338.jpg",
  "https://tomaslonnblad.github.io/339.jpg",
  "https://tomaslonnblad.github.io/340.jpg",
  "https://tomaslonnblad.github.io/341.jpg",
  "https://tomaslonnblad.github.io/342.jpg",
  "https://tomaslonnblad.github.io/343.jpg",
  "https://tomaslonnblad.github.io/344.jpg",
  "https://tomaslonnblad.github.io/345.jpg",
  "https://tomaslonnblad.github.io/346.jpg",
  "https://tomaslonnblad.github.io/347.jpg",
  "https://tomaslonnblad.github.io/348.jpg",
  "https://tomaslonnblad.github.io/349.jpg",
  "https://tomaslonnblad.github.io/350.jpg",
  "https://tomaslonnblad.github.io/351.jpg",
  "https://tomaslonnblad.github.io/352.jpg",
  "https://tomaslonnblad.github.io/353.jpg",
  "https://tomaslonnblad.github.io/354.jpg",
  "https://tomaslonnblad.github.io/255.jpg",
  "https://tomaslonnblad.github.io/356.jpg",
  "https://tomaslonnblad.github.io/357.jpg",
  "https://tomaslonnblad.github.io/358.jpg",
  "https://tomaslonnblad.github.io/359.jpg",
  "https://tomaslonnblad.github.io/360.jpg",
  "https://tomaslonnblad.github.io/361.jpg",
  "https://tomaslonnblad.github.io/362.jpg",
  "https://tomaslonnblad.github.io/363.jpg",
  "https://tomaslonnblad.github.io/364.jpg",
  "https://tomaslonnblad.github.io/365.jpg",
  "https://tomaslonnblad.github.io/366.jpg",
  "https://tomaslonnblad.github.io/367.jpg",
  "https://tomaslonnblad.github.io/368.jpg",
  "https://tomaslonnblad.github.io/369.jpg",
  "https://tomaslonnblad.github.io/370.jpg",
  "https://tomaslonnblad.github.io/371.jpg",
  "https://tomaslonnblad.github.io/372.jpg",
  "https://tomaslonnblad.github.io/373.jpg",
  "https://tomaslonnblad.github.io/274.jpg",
  "https://tomaslonnblad.github.io/375.jpg",
  "https://tomaslonnblad.github.io/376.jpg",
  "https://tomaslonnblad.github.io/377.jpg",
  "https://tomaslonnblad.github.io/378.jpg",
  "https://tomaslonnblad.github.io/379.jpg",
  "https://tomaslonnblad.github.io/380.jpg",
  "https://tomaslonnblad.github.io/381.jpg",
  "https://tomaslonnblad.github.io/382.jpg",
  "https://tomaslonnblad.github.io/383.jpg",
  "https://tomaslonnblad.github.io/384.jpg",
  "https://tomaslonnblad.github.io/385.jpg",
  "https://tomaslonnblad.github.io/386.jpg",
  "https://tomaslonnblad.github.io/387.jpg",
  "https://tomaslonnblad.github.io/388.jpg",
  "https://tomaslonnblad.github.io/389.jpg",
  "https://tomaslonnblad.github.io/390.jpg",
    "https://tomaslonnblad.github.io/391.jpg",
  "https://tomaslonnblad.github.io/392.jpg",
  "https://tomaslonnblad.github.io/393.jpg",
  "https://tomaslonnblad.github.io/394.jpg",
  "https://tomaslonnblad.github.io/395.jpg",
  "https://tomaslonnblad.github.io/296.jpg",
  "https://tomaslonnblad.github.io/397.jpg",
  "https://tomaslonnblad.github.io/398.jpg",
  "https://tomaslonnblad.github.io/399.jpg",
  "https://tomaslonnblad.github.io/400.jpg",
  "https://tomaslonnblad.github.io/401.jpg",
  "https://tomaslonnblad.github.io/402.jpg",
  "https://tomaslonnblad.github.io/403.jpg",
  "https://tomaslonnblad.github.io/404.jpg",
  "https://tomaslonnblad.github.io/405.jpg",
  "https://tomaslonnblad.github.io/406.jpg",
  "https://tomaslonnblad.github.io/407.jpg",
  "https://tomaslonnblad.github.io/408.jpg",
  "https://tomaslonnblad.github.io/409.jpg",
  "https://tomaslonnblad.github.io/410.jpg",
  "https://tomaslonnblad.github.io/411.jpg",
  "https://tomaslonnblad.github.io/412.jpg",
  "https://tomaslonnblad.github.io/413.jpg",
  "https://tomaslonnblad.github.io/414.jpg",
  "https://tomaslonnblad.github.io/415.jpg",
  "https://tomaslonnblad.github.io/416.jpg",
  "https://tomaslonnblad.github.io/417.jpg",
  "https://tomaslonnblad.github.io/418.jpg",
  "https://tomaslonnblad.github.io/419.jpg",
  "https://tomaslonnblad.github.io/420.jpg",
  "https://tomaslonnblad.github.io/421.jpg",
  "https://tomaslonnblad.github.io/422.jpg",
  "https://tomaslonnblad.github.io/423.jpg",
  "https://tomaslonnblad.github.io/424.jpg",
  "https://tomaslonnblad.github.io/425.jpg",
  "https://tomaslonnblad.github.io/426.jpg",
  "https://tomaslonnblad.github.io/427.jpg",
  "https://tomaslonnblad.github.io/428.jpg",
  "https://tomaslonnblad.github.io/429.jpg",
  "https://tomaslonnblad.github.io/430.jpg",
  "https://tomaslonnblad.github.io/431.jpg",
    "https://tomaslonnblad.github.io/432.jpg",
  "https://tomaslonnblad.github.io/433.jpg",
  "https://tomaslonnblad.github.io/434.jpg",
  "https://tomaslonnblad.github.io/435.jpg",
  "https://tomaslonnblad.github.io/436.jpg",
  "https://tomaslonnblad.github.io/437.jpg",
  "https://tomaslonnblad.github.io/438.jpg",
  "https://tomaslonnblad.github.io/439.jpg",
  "https://tomaslonnblad.github.io/440.jpg",

]

const FRAME_OFFSET = -30
const FRAMES_VISIBLE_LENGTH = 3
const SCROLL_THRESHOLD = 40
const BUFFER_SIZE = 8 // Render 8 cards before and after visible range (increased for fast scrolling)

export default function TimeMachine({
  shouldImplementPreloading = false,
}: {
  shouldImplementPreloading?: boolean
}) {
  // Use continuous index that can go infinite in both directions
  const [currentIndex, setCurrentIndex] = React.useState(0)
  const containerRef = React.useRef<HTMLDivElement>(null)
  const scrollAccumulator = React.useRef(0)
  const lastUpdateTime = React.useRef(Date.now())
  const touchStartY = React.useRef(0)

  // Calculate which cards should be rendered (visible + buffer)
  const getVisibleCards = React.useCallback(() => {
    const start = currentIndex - BUFFER_SIZE
    const end = currentIndex + FRAMES_VISIBLE_LENGTH + BUFFER_SIZE
    const cards = []

    for (let i = start; i <= end; i++) {
      cards.push({
        index: i,
        imageIndex: ((i % IMAGES.length) + IMAGES.length) % IMAGES.length, // Positive modulo
      })
    }

    return cards
  }, [currentIndex])

  React.useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const MIN_UPDATE_INTERVAL = 75 // Minimum 75ms between index changes (max ~13 changes per second)

    const handleWheel = (e: WheelEvent) => {
      e.preventDefault()
      scrollAccumulator.current += e.deltaY

      const now = Date.now()
      const timeSinceLastUpdate = now - lastUpdateTime.current

      if (Math.abs(scrollAccumulator.current) >= SCROLL_THRESHOLD) {
        // Only update if enough time has passed since last update
        if (timeSinceLastUpdate >= MIN_UPDATE_INTERVAL) {
          const delta = scrollAccumulator.current > 0 ? 1 : -1
          setCurrentIndex((prev) => prev + delta)
          scrollAccumulator.current = 0
          lastUpdateTime.current = now
        }
      }
    }

    const handleTouchStart = (e: TouchEvent) => {
      touchStartY.current = e.touches[0].clientY
    }

    const handleTouchMove = (e: TouchEvent) => {
      e.preventDefault()
      const touchY = e.touches[0].clientY
      const deltaY = touchStartY.current - touchY
      touchStartY.current = touchY

      scrollAccumulator.current += deltaY

      const now = Date.now()
      const timeSinceLastUpdate = now - lastUpdateTime.current

      if (Math.abs(scrollAccumulator.current) >= SCROLL_THRESHOLD) {
        if (timeSinceLastUpdate >= MIN_UPDATE_INTERVAL) {
          const delta = scrollAccumulator.current > 0 ? 1 : -1
          setCurrentIndex((prev) => prev + delta)
          scrollAccumulator.current = 0
          lastUpdateTime.current = now
        }
      }
    }

    container.addEventListener("wheel", handleWheel, { passive: false })
    container.addEventListener("touchstart", handleTouchStart, {
      passive: false,
    })
    container.addEventListener("touchmove", handleTouchMove, {
      passive: false,
    })

    return () => {
      container.removeEventListener("wheel", handleWheel)
      container.removeEventListener("touchstart", handleTouchStart)
      container.removeEventListener("touchmove", handleTouchMove)
    }
  }, [])

  useShortcuts({
    ArrowRight: () => {
      setCurrentIndex((prev) => prev + 1)
    },
    ArrowLeft: () => {
      setCurrentIndex((prev) => prev - 1)
    },
  })

  const visibleCards = getVisibleCards()

  return (
    <div ref={containerRef} className="relative w-full h-full flex items-center justify-center overflow-hidden">
      <div className="relative w-full h-full flex items-center justify-center">
        {visibleCards.map((card) => {
          const offsetIndex = card.index - currentIndex
          const blur = currentIndex > card.index ? 2 : 0
          const opacity = currentIndex > card.index ? 0 : 1
          const scale = clamp(1 - offsetIndex * 0.08, [0.08, 3])
          const y = clamp(offsetIndex * FRAME_OFFSET, [FRAME_OFFSET * FRAMES_VISIBLE_LENGTH, Number.POSITIVE_INFINITY])

          const src = IMAGES[card.imageIndex]
          const image = <img alt="" src={src || "/placeholder.svg"} className="object-cover w-full h-full" />

          return (
            <motion.div
              key={card.index}
              className="absolute w-[100%] max-w-[800px] aspect-[16/9] bg-black rounded-lg overflow-hidden shadow-2xl"
              initial={false}
              animate={{
                y,
                scale,
                transition: {
                  type: "spring",
                  stiffness: 250,
                  damping: 20,
                  mass: 0.5,
                },
              }}
              style={{
                willChange: "opacity, filter, transform",
                filter: `blur(${blur}px)`,
                opacity,
                transitionProperty: "opacity, filter",
                transitionDuration: "200ms",
                transitionTimingFunction: "ease-in-out",
                zIndex: 1000 - card.index,
              }}
            >
              {shouldImplementPreloading ? <>{offsetIndex < FRAMES_VISIBLE_LENGTH ? image : null}</> : image}
            </motion.div>
          )
        })}
      </div>
    </div>
  )
}
