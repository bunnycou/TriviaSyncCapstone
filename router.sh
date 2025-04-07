# script to be ran on raspberry pi
# make sure system is up to date
sudo apt update -y
sudo apt upgrade -y
# install prereqs
sudo apt install -y procps iproute2 dnsmasq iptables hostapd iw haveged
# install lnxrouter
sudo curl -o /usr/local/bin/lnxrouter https://raw.githubusercontent.com/bunnycou/linux-router/refs/heads/master/lnxrouter
sudo chmod +x /usr/local/bin/lnxrouter
# create run script
echo "sudo lnxrouter --ap wlan0 TriviaSync -p password -i eth0 -g 192.168.12.1 -d" > router
chmod +x router
# add entry to hosts file for dns
echo "192.168.12.12 triviasync.com www.triviasync.com" | sudo tee -a /etc/hosts
# disable dewfault dnsmasq that conflicts with lnxrouter
sudo systemctl disable dnsmasq
# suggest reboot
echo "It is recommended to sudo reboot to apply all changes before running"