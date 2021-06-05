## Postman

#### Auto update variables
```
var jsonData = JSON.parse(responseBody);
postman.setEnvironmentVariable("postmanVarName", jsonData.varName);
```

## Mount encypted hard disk

Take from https://askubuntu.com/questions/63594/mount-encrypted-volumes-from-command-line

```
udisksctl unlock -b /dev/sdb5
udisksctl mount -b /dev/mapper/ubuntu--vg-root

After typing the first command, you'll be prompted for your encryption passphrase. Once the encrypted partition is unlocked, the second command will mount it. If that's successful, you'll end up with a message similar to this:

Mounted /dev/dm-1 at /media/dpm/e8cf82c0-f0a3-41b3-ab28-1f9d23fcfa72
```
