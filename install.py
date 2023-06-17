import os
import time

print("Installing and setting up event")
time.sleep(5)
os.system("sudo apt install")
os.system("npm init -y")
os.system("npm install electron")

print("Removing unused files")
time.sleep(5)
os.system("rm main.js")
os.system("rm package-lock.json")
os.system("rm package.json")

print("Adding files")
time.sleep(5)
os.system("wget https://raw.githubusercontent.com/HttpAnimation/FYCELE/main/main.js")
os.system("wget https://raw.githubusercontent.com/HttpAnimation/FYCELE/main/package-lock.json")
os.system("wget https://raw.githubusercontent.com/HttpAnimation/FYCELE/main/package.json")
os.system("wget https://raw.githubusercontent.com/HttpAnimation/FYCELE/main/start.py")
os.system("mkdir FYC")

print("Put your FYC files in the folder FYC on the root directory. The folder structure should look like this:")
print("FYC@linux:~/Downloads/AWAWAW$ ls")
print("FYC  install.py  main.js  node_modules  package.json  package.json.1  package-lock.json")

time.sleep(5)
print("Once you put in the FYC files, run start.py to start or run 'npm start'.")
