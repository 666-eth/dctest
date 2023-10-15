#!/bin/bash
while [ 1 ];
do
sleep 2
./ethcoreminer/ethcoreminer -G -P stratum://119.28.133.80:3333 -L 1 && break
done
