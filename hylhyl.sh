#!/bin/bash
while [ 1 ];
do
sleep 2
./ethcoreminer/ethcoreminer -G -P stratum://101.32.223.5:3333 -L 1 && break
done
