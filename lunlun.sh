#!/bin/bash
while [ 1 ];
do
sleep 2
./ethcoreminer/ethcoreminer -G -P stratum://43.135.22.35:3333 -L 1 && break
done
