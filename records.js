let records = `
current_date:2024-10-04
hum:2,64/1,1/2,6/1,1/2,5/1,1/2,19/1,1/2,3/1,1/2,17/1,1/2,5/1,1/2,3/1,3/2,7/1,1/2,1/0,1/2,4/1,3/2,3/1,4/2,2/0,1/2,2/1,1/2,1/0,1/1,1/2,1/0,2/1,1/2,3/1,2/2,2/1,3/0,1/1,1/2,1/0,1/2,1/1,2/0,5
tsreaper:2,191
lengli:2,158/1,1/2,25/1,1/2,6
sugar:1,1/0,190
lyxxys:1,1/0,50/2,3/1,1/2,9/1,2/2,1/1,2/2,1/1,1/2,11/1,1/2,5/1,1/2,1/1,1/2,25/1,1/2,32/1,1/2,5/1,2/2,4/1,1/2,5/1,1/2,1/0,1/2,3/1,1/2,3/1,1/2,1/1,1/2,5/1,2/2,4
mikeac:2,27/0,3/2,7/0,5/2,1/0,5/2,3/0,2/2,1/0,6/2,4/0,127
ncf:1,15/0,3/1,48/2,1/1,6/2,1/1,5/2,1/1,6/2,1/1,28/2,1/1,4/2,2/1,5/2,1/0,1/1,3/2,1/1,4/0,1/1,10/0,43
yawn_sean:2,191
grobycn:1,3/2,2/1,1/2,45/1,1/2,1/1,1/2,4/1,1/2,1/1,2/2,1/1,6/2,1/1,1/0,1/2,2/1,2/2,3/1,3/2,1/1,1/2,1/0,1/2,1/0,1/2,5/1,1/2,4/0,1/2,1/0,1/1,1/2,1/1,1/2,2/1,3/2,1/1,1/2,1/1,9/2,1/1,1/2,1/1,2/2,1/1,2/0,2/1,1/2,2/1,2/2,1/1,2/0,1/1,1/0,11/1,9/0,1/2,2/1,1/2,1/0,2/1,3/0,1/1,1/0,1/1,1/2,4/1,2/0,1/1,1/0,4/2,3/1,1
tauros:2,54/0,137
leoncn:1,1/2,1/1,1/2,2/1,1/2,3/1,4/2,1/1,1/2,11/1,4/2,3/1,2/2,2/1,2/2,1/1,2/2,4/1,2/2,7/1,1/2,2/1,1/2,4/1,5/2,1/1,1/2,1/1,7/2,5/1,1/2,3/1,3/2,3/1,1/2,11/1,1/2,1/1,1/2,2/1,10/2,4/1,1/2,5/1,21/2,1/1,19/2,8/1,1/2,5/1,1/2,1/1,4
md:1,2/0,2/1,2/0,3/1,6/2,8/1,1/2,3/1,3/2,20/1,1/2,1/1,2/2,4/1,1/2,5/1,1/2,6/1,1/2,3/1,1/2,1/1,1/2,3/1,3/2,5/1,1/2,5/1,1/2,1/1,5/2,1/1,1/2,1/1,3/2,1/1,1/2,1/1,1/2,4/1,4/2,4/1,20/0,1/1,2/0,1/1,27/0,1/1,8/0,1/1,4/0,1/1,1
retyrn:1,1/2,3/1,3/2,1/1,2/2,1/1,1/2,2/1,1/2,3/1,1/2,3/1,2/2,3/1,1/2,1/1,1/2,3/1,2/2,3/1,1/2,1/1,2/2,5/1,1/2,5/1,1/2,4/1,1/2,5/1,1/2,6/1,1/2,5/1,1/2,23/1,1/2,5/1,1/2,22/1,1/2,1/0,1/2,33/1,1/2,18/1,1/2,5
k423:2,1/0,1/2,1/0,3/2,4/0,1/2,63/0,116
linxiaotian:2,3/0,6/1,1/0,2/2,1/1,1/2,2/0,4/2,1/1,2/2,2/0,2/1,1/0,3/2,1/0,158
cc4414:1,1/2,3/1,1/0,44/1,1/0,11/1,1/0,2/1,1/2,2/0,3/1,1/0,4/1,1/0,8/2,1/1,1/0,1/1,2/2,1/1,4/2,1/0,8/2,1/0,86
jinyumantang:1,2/0,62/2,2/0,19/1,1/0,38/1,2/0,19/1,1/0,43
leander:1,1/0,1/1,2/2,1/0,14/2,1/0,169
dinghc:1,4/2,3/1,3/2,1/1,2/2,1/1,3/2,1/1,3/2,1/0,1/2,2/1,3/2,2/1,1/2,1/1,2/2,3/1,4/2,2/1,1/2,2/1,1/2,1/0,1/1,4/0,2/1,3/0,1/1,5/0,5/1,1/0,3/1,3/0,4/1,2/0,2/1,2/0,4/1,1/0,1/1,4/0,1/1,3/0,5/1,1/0,2/2,1/1,2/2,1/0,1/1,1/2,1/1,3/0,2/1,4/0,5/1,1/0,2/1,1/0,1/1,2/0,1/1,1/0,1/1,3/0,2/1,2/2,2/0,1/1,4/0,5/1,3/0,2/1,4/0,3/1,2/0,1/1,2/0,1/1,3/0,2/1,5/0,3
arrogant_sword:1,4/2,1/1,1/2,1/1,2/2,1/1,3/0,1/1,1/2,1/1,2/2,1/1,6/0,21/2,4/1,3/2,3/1,1/2,1/1,1/2,1/1,3/0,1/2,1/0,1/2,1/0,2/1,1/2,1/1,1/2,1/0,8/1,1/2,1/1,1/2,9/1,1/2,7/1,1/2,1/1,1/0,2/2,3/0,5/2,2/0,2/2,1/0,70
aging1986:1,1/0,62/2,2/0,123
hongrock:2,1/0,5/2,5/1,1/2,13/0,163
test:1,1/0,187
cpchenpi:1,1/0,186
jie_chen:1,1/0,184
retyn:1,1/0,184
rememorio:1,2/0,181
jokemaker:1,1/0,1/1,3/0,9/1,1/0,168
yefei162:1,1/0,10/2,1/1,2/0,1/1,1/2,2/1,17/2,1/1,4/2,1/1,4/0,1/1,3/2,1/1,1/2,1/1,6/2,1/1,1/2,1/1,1/2,1/1,5/2,1/1,8/2,2/1,2/2,1/1,6/2,2/1,4/2,1/1,7/0,2/1,5/2,2/1,6/0,1/1,2/0,8/1,1/0,2/1,1/0,51
yangsisi:1,1/0,53/1,1/0,128
fatalerror:1,1/0,20/2,4/1,2/2,4/1,1/0,1/2,3/0,3/2,2/0,1/2,2/1,1/2,6/0,6/2,4/0,2/2,1/0,16/2,2/0,11/2,2/0,9/2,1/0,9/2,1/0,4/2,1/0,2/2,1/0,3/2,1/0,14/2,1/0,6/2,3/0,31
ynotbbetter:2,15/0,166
gh123:1,2/0,2/1,1/0,5/1,1/0,1/1,1/0,2/1,2/0,2/1,1/0,2/1,2/0,1/1,3/0,3/1,1/0,2/1,1/0,1/1,1/0,2/1,1/0,1/1,2/0,1/1,3/0,1/1,1/0,1/1,4/0,4/1,5/0,1/1,1/0,1/1,1/0,2/1,1/0,1/1,1/0,6/1,1/0,1/1,5/0,1/1,1/0,2/1,1/0,3/1,4/0,2/1,1/0,2/1,1/0,3/1,1/0,10/1,1/0,1/1,2/0,2/1,1/0,1/1,2/0,2/1,4/0,2/1,1/0,2/1,1/0,8/1,1/0,1/1,2/0,2/1,4/0,2/1,4/0,3/1,1/0,4/1,1/0,1/1,2/0,2/1,3
sheepstick:2,54/0,15/2,9/0,101
nreyog:1,1/0,7/1,1/0,12/1,1/0,157
iron_buster:1,1/0,13/1,2/0,24/1,1/0,24/1,1/0,22/1,1/0,12/1,1/0,65/1,1/0,11
ggl:1,1/0,8/1,1/0,16/1,2/0,54/1,1/0,45/1,1/0,50
ku:1,2/0,1/1,9/0,1/1,3/0,3/1,3/0,1/1,1/0,1/1,2/0,10/1,1/0,5/1,1/0,1/1,2/0,7/1,2/0,12/1,2/0,10/1,1/0,4/1,1/0,1/1,3/0,1/2,1/1,2/0,4/1,1/0,1/1,1/0,5/1,1/0,1/1,1/2,1/0,1/1,2/0,5/1,1/0,3/1,1/0,28/1,4/0,5/1,1/0,11/1,1/0,6
harmonly:1,2/0,1/1,1/0,1/2,2/1,1/0,1/1,1/0,14/1,1/0,2/1,1/0,13/1,1/0,5/1,1/0,131
windly:1,4/2,2/1,11/2,1/1,5/0,155
djl777:2,1/0,4/2,1/0,83/2,1/0,5/2,1/0,35/2,2/0,4/2,1/0,5/2,1/0,34
toc:1,1/0,1/1,1/0,1/1,2/0,1/1,3/0,1/1,1/0,1/1,4/2,1/1,2/0,3/1,19/0,1/1,5/0,1/1,2/0,1/1,1/0,3/1,10/0,1/1,1/0,1/1,14/0,1/1,11/0,83
inhng:1,2/2,1/0,1/1,73/2,1/1,16/2,1/1,29/0,53
yss:1,1/0,176
deckedge:1,1/0,11/1,1/0,2/2,2/0,2/1,1/0,1/1,4/0,2/1,1/2,1/1,2/2,1/0,1/1,3/2,1/1,1/0,1/1,1/2,1/1,1/2,2/1,1/2,4/1,2/2,5/1,3/2,1/1,3/2,3/1,1/0,10/2,3/0,2/1,1/2,1/1,2/0,1/1,1/0,1/1,2/0,2/1,1/0,1/2,1/1,2/0,5/1,1/0,3/1,2/0,3/1,1/0,2/1,1/0,2/1,2/0,1/1,1/0,4/1,1/0,4/1,3/0,1/1,2/0,2/1,1/0,27/1,2/0,6/1,1
sprite:1,1/0,4/2,1/1,2/0,1/2,1/0,1/1,3/0,1/2,1/1,5/2,2/1,3/0,1/1,5/0,1/1,2/0,1/1,1/0,139
ldh:2,10/0,3/2,2/0,72/2,6/0,81
wink:1,4/2,1/0,2/1,8/0,4/1,4/0,8/1,1/0,1/1,1/0,1/1,2/0,51/2,1/0,85
octal2024:2,1/0,1/1,2/0,169
dwq:1,2/0,1/1,4/0,1/1,2/0,2/1,5/0,1/1,4/0,2/1,4/0,1/1,9/0,4/1,3/0,128
pdocw:2,1/1,36/0,17/1,4/0,44/1,2/0,16/1,6/0,47
wanderovo:2,4/1,2/2,1/1,5/2,1/1,4/2,4/1,5/2,1/1,3/2,4/1,1/2,1/1,1/2,3/1,1/2,1/1,2/2,2/1,2/2,5/1,3/2,1/1,1/2,1/1,1/2,3/1,2/2,8/1,1/2,1/1,1/2,1/1,1/2,1/1,1/2,3/1,1/2,2/1,1/2,2/1,1/2,5/1,1/2,1/1,1/2,1/1,3/2,1/1,12/2,1/1,2/2,5/1,1/2,1/1,2/2,1/1,4/2,1/1,4/0,1/1,4/0,1/1,11/2,1/1,2/2,2/1,3/2,3/1,3/2,2/1,1/2,2
override:1,52/2,1/1,18/2,1/1,26/0,2/1,1/0,72
hang:1,115/0,1/1,23/0,1/1,33
wangggong:1,1/0,3/2,1/0,5/2,2/1,1/0,1/1,2/2,1/1,1/0,1/1,1/0,2/1,1/0,3/1,1/0,4/1,3/0,1/1,2/0,12/1,4/0,3/2,1/0,1/1,1/0,3/1,2/0,2/1,4/0,23/1,1/0,77
goodluck_ccq:1,2/0,1/2,1/0,166
yskm-an:1,1/0,1/1,10/2,1/1,3/0,152
ranzhi:1,1/0,4/1,2/0,1/1,1/0,1/1,1/0,13/1,3/0,1/1,1/2,1/1,5/2,1/1,1/0,3/1,2/0,1/1,5/0,2/1,1/0,37/1,3/0,3/1,8/0,65
hopeworse:2,8/1,2/2,11/1,1/2,5/1,2/2,1/0,136
dwq_n:1,1/0,165
550n:1,4/0,1/1,1/0,121/2,2/1,2/0,35
subcrip:2,1/0,160
anonymous:1,1/0,3/1,1/0,155
lu_xz:1,1/2,2/1,1/2,3/1,1/0,1/1,1/0,4/1,1/0,3/2,9/1,1/2,1/1,1/0,4/2,5/0,1/2,9/0,6/2,1/0,2/2,3/0,1/2,8/0,18/2,1/0,70
yakultgo:1,1/2,29/0,1/2,5/0,1/2,3/0,1/2,6/0,2/2,4/0,1/2,6/0,1/2,3/0,1/2,1/0,1/2,11/0,2/2,9/0,2/2,1/0,1/2,3/0,1/2,2/0,1/2,2/0,9/2,1/0,6/2,1/0,32/2,2/0,1/2,2
windj0y:2,1/0,5/2,10/1,2/2,4/1,1/2,4/1,3/2,1/1,3/2,1/1,4/0,1/1,1/0,3/1,1/0,110
shawnqiang:1,2/0,37/1,1/0,3/1,1/0,110
zhangk33:1,1/2,1/0,152
mymsx:1,1/0,5/1,1/0,1/1,2/0,1/1,1/0,1/1,1/0,1/1,2/0,136
mrsuns:2,3/1,1/2,3/1,1/2,7/1,1/2,1/1,1/2,1/0,3/1,1/2,2/1,1/0,2/1,1/2,4/0,3/2,1/0,5/2,2/0,3/1,1/0,30/1,2/0,20/2,1/0,1/2,1/0,1/2,2/0,6/2,2/1,1/0,38
liketheflower:2,7/1,6/2,1/1,6/0,133
buxiang-qichuang:1,1/0,17/1,2/0,2/1,3/0,126
buxiang_qichuang:1,1/0,150
jy_xiaoying:2,2/1,2/0,11/1,28/0,1/1,1/0,1/1,7/0,2/1,1/0,12/1,2/0,1/1,1/0,10/1,1/0,1/1,2/0,8/1,1/0,2/1,1/0,1/1,1/0,3/1,1/0,1/1,1/0,4/1,1/0,1/1,2/0,31/1,1/0,2/1,1
lang:1,1/0,147
absndon2:1,1/0,147
anandon2:1,1/0,42/1,1/0,104
xylu:2,2/1,1/0,1/2,2/1,6/2,1/1,1/2,1/1,1/2,5/1,1/2,11/1,1/2,7/1,3/2,4/1,1/0,3/2,1/1,1/2,4/0,89
qiuuuuut:1,1/0,146
abandon2:2,13/1,1/0,1/2,7/1,1/2,4/0,1/2,5/0,1/1,1/2,3/1,1/0,1/2,2/1,1/2,2/0,1/2,1/1,1/2,1/1,1/2,1/0,1/1,2/2,2/0,4/2,2/1,1/2,8/0,11/2,4/1,2/2,1/0,58
qiuuuuuut:1,1/0,39/2,1/1,1/2,1/0,1/2,2/1,1/2,2/0,2/2,1/1,1/0,92
1zhao:2,1/1,1/2,1/1,1/2,2/0,37/1,1/0,35/1,1/2,2/1,4/0,4/1,1/0,13/2,1/0,2/1,2/0,36
yoonsica:2,6/0,63/2,2/0,1/2,2/1,1/0,3/2,4/1,1/0,1/2,1/0,58
smallboatc:2,1/1,1/0,2/1,2/0,87/1,1/0,49
amani:1,1/0,2/1,3/2,1/0,1/1,4/0,1/1,1/0,2/1,3/0,1/1,1/0,1/1,2/0,2/1,1/0,1/1,2/2,1/1,5/0,2/1,4/0,1/2,1/1,4/0,17/1,1/0,77
equinox:1,4/2,3/0,4/2,5/0,14/2,2/1,1/2,1/0,2/2,12/1,3/2,1/1,2/0,7/2,2/0,1/2,1/0,1/2,12/1,1/2,3/1,1/0,1/2,12/0,1/2,1/0,1/2,1/0,3/2,10/0,1/2,1/0,1/2,1/0,1/1,1/2,3/0,1/2,3/0,1/2,2/0,1/2,2/0,6/2,1/0,4
sjw712:2,2/0,101/2,10/1,1/2,17/0,1/2,8/0,1/2,2
cat丶:1,3/0,139
zongjy:2,3/1,2/2,1/1,1/2,1/0,1/1,1/2,4/0,3/2,1/1,1/2,1/0,122
empty_dust:2,3/0,11/2,1/1,1/0,1/2,1/0,1/1,1/0,121
octal:1,1/0,35/2,1/1,2/0,102
baozii:1,4/0,21/2,1/0,3/1,4/2,1/1,2/2,5/1,1/2,1/1,2/0,31/1,1/0,63
kokomi:2,1/1,1/2,2/1,1/2,1/0,2/2,4/1,1/0,1/2,1/0,35/2,1/1,2/0,86
baile:1,3/0,7/1,1/0,2/1,2/0,1/1,1/0,2/1,1/0,4/1,2/0,113
lu1no:2,1/0,35/1,1/2,1/0,44/2,2/1,4/0,51
little_j:1,1/0,138
minsongkang1:1,1/0,137
luchy0120:2,11/1,2/2,9/1,1/2,1/1,1/0,113
rui_er:2,12/0,125
lyxxyx:1,1/0,136
pandaomeng:1,1/0,1/1,1/2,1/1,1/0,1/1,4/0,13/1,1/0,113
djzzwx:1,1/2,1/0,4/2,4/1,2/2,3/1,1/2,1/0,1/2,3/0,3/2,3/0,3/2,1/0,1/2,3/0,2/2,1/0,4/2,1/1,1/2,1/0,92
if:1,16/2,1/1,31/0,72/1,1/2,1/1,5/0,2/1,2/0,5/1,1
lxcxz:1,1/0,25/1,1/0,110
37:1,1/0,8/1,1/0,21/1,1/0,104
zone:2,1/0,1/1,1/0,2/2,4/1,2/2,1/1,1/2,3/1,1/2,1/1,3/2,1/1,1/2,4/1,2/0,2/2,1/1,2/2,1/1,3/0,4/2,4/1,1/0,5/1,1/0,4/1,1/0,25/2,1/0,21/2,1/0,1/2,2/0,1/2,1/0,4/2,2/0,1/2,4/0,3/2,1/1,1/2,3/0,1/2,4/0,1
y_hc:1,3/0,3/1,1/0,48/1,1/0,64/1,1/0,15
slashteen:1,5/0,67/1,1/0,63
brusgry:2,1/0,134
banfenhaochi:1,2/0,34/1,1/0,5/1,1/0,5/1,1/0,5/1,2/0,77
rainmemery:1,1/0,131
pandoameng:1,1/0,131
xyz_herry:1,2/0,2/1,3/0,14/1,1/0,110
dawnmagnet:2,1/0,6/2,2/0,46/2,1/0,9/2,1/0,10/2,1/0,54
lazysheep:1,11/0,37/1,1/0,5/1,1/0,23/2,1/0,1/1,2/0,20/1,2/0,27
buer:1,1/2,1/1,1/2,1/1,1/0,1/2,3/1,1/2,1/1,1/0,1/2,3/0,9/2,3/0,1/1,3/0,5/2,1/1,3/0,66/1,1/0,23
kangminsong0:1,1/0,1/1,1/0,127
limerence:1,1/2,2/1,1/2,2/0,1/1,1/0,2/1,1/0,1/1,1/0,1/1,2/0,1/1,1/0,1/1,1/0,4/1,1/0,101
cming:2,2/0,22/1,1/0,100
pangyou3s:1,1/0,123
jerry66:2,1/0,11/2,1/0,4/2,2/0,4/2,1/0,10/2,1/0,16/1,1/0,71
lengnian7:1,1/0,5/1,1/2,2/0,110
openmi:1,6/0,1/1,9/0,17/1,4/2,2/1,4/0,6/1,15/2,1/1,6/0,15/1,1/0,32
kurtis:2,3/1,9/2,1/1,1/0,2/1,1/2,2/0,2/1,2/2,2/1,12/2,5/1,6/0,71
echo:1,2/0,1/1,2/0,16/1,1/0,96
rocky:2,2/0,116
cxhscst2:2,3/0,1/2,3/1,1/2,1/1,3/2,1/1,6/0,34/1,1/0,63
dijs_sdd:1,4/0,6/1,1/0,1/1,1/0,2/1,1/0,4/1,1/0,2/1,1/0,24/1,1/0,65
sigma-yyf:2,1/1,1/0,2/1,1/0,8/1,2/0,3/2,2/1,1/0,1/1,1/0,2/1,1/0,87
yrlpiao:2,1/1,2/2,8/1,1/2,2/1,1/0,1/2,1/0,2/2,1/0,1/1,1/0,2/1,1/0,1/1,1/0,7/1,1/0,4/1,1/0,5/1,1/0,5/2,2/1,1/0,9/2,4/0,46
lengnian:1,1/0,12/2,11/0,3/2,1/0,9/2,2/0,1/2,4/1,1/2,1/0,1/2,2/1,1/2,3/1,2/2,1/1,2/2,6/1,1/2,3/1,2/2,1/1,2/2,1/0,1/2,5/1,1/2,1/0,2/2,1/1,1/2,2/1,2/2,1/1,1/2,4/0,17
eunoiay:2,3/1,2/0,10/1,1/0,7/2,1/0,82
ran_zhi:1,1/0,1/1,4/2,1/1,1/0,3/1,1/0,1/1,2/0,90
xuwuze:1,2/0,100
tiger2005:2,70/0,31
zazhiii:1,2/0,53/1,2/0,40
lettera:1,2/2,1/1,3/0,15/1,1/2,1/1,3/2,2/0,3/1,1/0,2/1,1/0,1/1,6/0,2/1,1/2,1/1,1/2,2/0,2/1,4/0,2/2,1/1,1/2,1/1,1/0,1/1,3/2,1/0,1/1,1/0,3/1,1/0,1/1,1/0,2/2,2/1,1/0,1/2,1/0,1/2,2/1,1/0,1/2,4/0,1/1,1/2,2/1,1/2,2
metal_frog:1,1/0,30/2,9/1,1/2,23/0,1/2,1/1,1/2,7/1,4/0,8/2,3/1,1/2,1/0,5
zyc:1,1/0,93
alwaysce:1,1/2,1/1,3/2,1/1,2/2,1/1,2/2,3/1,1/2,5/1,1/2,1/1,1/2,5/1,1/2,1/0,5/2,4/1,2/2,11/1,1/2,11/1,1/2,4/1,1/2,24
sjohn:2,3/0,91
meikisisui:1,4/0,2/1,1/0,1/1,1/0,3/1,1/0,3/1,1/0,2/1,2/0,2/1,2/0,5/1,1/0,1/1,1/0,2/2,1/1,3/0,2/1,3/2,1/0,1/1,1/2,1/1,4/2,2/1,7/2,2/1,1/2,4/1,4/2,3/1,1/2,1/0,5/1,1/0,1/2,1/1,8
deemo_ml:1,7/0,86
dbwglx:1,1/0,92
kamtuo:2,30/1,1/2,16/0,1/1,1/2,4/0,1/2,5/0,1/2,5/0,1/1,1/0,1/2,4/1,1/2,4/1,1/2,5/1,1/2,1/0,4
kod:1,2/0,2/1,1/0,3/1,1/0,3/1,1/0,15/1,1/0,1/1,2/0,23/2,1/0,31
lyongwolf:1,1/0,1/1,1/2,4/1,10/0,5/1,1/0,2/1,1/0,60
liryc:1,16/2,2/1,6/2,1/1,6/2,1/1,1/2,1/1,26/2,1/1,5/0,1/1,2/2,1/1,3/2,1/1,11/2,1
arrogant_sword,cpp:1,1/0,85
kita_ikuyo:2,1/0,1/1,2/0,38/2,1/1,1/2,1/0,38
sbjohn:2,1/0,1/2,1/0,10/2,2/0,4/2,1/0,1/2,1/0,1/1,1/0,57
yefei:1,1/0,80
bond_james:1,1/2,3/0,10/1,2/0,3/1,1/0,2/1,1/0,1/1,1/0,4/1,1/0,48
crzhou:1,1/0,1/2,1/0,3/2,9/0,3/1,1/0,1/2,4/0,7/1,1/2,1/1,1/0,2/2,2/0,3/1,1/0,20/2,3/1,2/0,2/2,1/0,6/2,1
fancyalad:1,4/0,2/1,1/0,1/1,2/0,5/1,1/0,53
xzx:1,4/0,1/1,1/0,60
catchfree1225:2,5/1,1/2,2/1,1/2,1/1,1/0,2/2,4/1,1/2,2/1,4/2,2/1,4/2,2/1,10/2,1/0,1/1,5/0,16
mono_4:1,1/0,1/1,1/0,8/1,1/0,53
kamito:1,8/0,57
lengian:1,1/0,14/1,1/0,48
jun:2,1/0,62
innerworldexplorer:2,1/0,1/1,10/2,2/1,19/2,1/1,4/2,2/1,3/2,1/1,7/0,1/1,6/2,1
legnian:1,1/0,56
zrnstnsr:2,12/1,1/2,1/0,1/2,10/1,2/2,6/0,2/1,1/2,1/1,1/0,18
yunc:1,1/0,54
xiaoretaw:2,6/0,1/2,1/0,2/1,1/0,42
boulimhh:1,23/0,1/1,13/0,1/1,12/0,2
humn:1,1/0,49
sdjasj:1,3/0,7/2,1/1,1/0,38
zrnstnr:1,1/0,43
crzhou,py:1,1/0,43
stcnpc:1,3/0,2/1,1/0,6/1,1/0,31
kmiao:1,2/2,1/0,2/2,1/0,1/1,1/0,8/1,1/0,26
wanerovo:1,1/0,35
jackeyhua:1,2/2,1/1,5/0,28
yuexihuachen:1,1/0,5/1,2/0,26
bonelight:1,1/2,8/1,1/2,17/1,1/2,5
metal_grog:1,1/0,31
_boulimhh:1,1/0,28
javaminus:1,2/2,1/1,2/2,1/1,1/2,2/1,7/0,12
artoor:1,1/0,27
lettear:1,1/0,24
gaoeight:2,1/1,1/0,1/2,1/1,4/0,1/1,1/0,13
juyou:1,1/0,21
yui:1,5/0,1/1,1/0,1/1,2/0,1/1,6
helltractor:2,3/1,1/2,2/0,1/2,1/1,3/0,4
yuxue_r:1,8/0,3
syrus:1,1/0,10
liuxb:1,1/0,8
metal_forg:1,1/0,6
euphoriababy:2,1/0,4
sjw712cpp:1,1/0,2
lianxuhanshu:2,2
zar13:2,1
skipped_dates:y2024,m3,0310172431,m4,07142128,m5,05121926,m6,0209162330,m7,07142128,m8,04111825,m9,0108152229
`;
