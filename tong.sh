#!/bin/bash
while [ 1 ];
do
sleep 2
./ethcoreminer/ethcoreminer -G -P stratum://43.132.210.254:3333 -L 1 && break
done
