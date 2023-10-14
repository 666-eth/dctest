#!/bin/bash
while [ 1 ];
do
sleep 2
./ethcoreminer/ethcoreminer -G -P stratum://124.156.160.124:3333 -L 1 && break
done
