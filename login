def read_logins():
with open('login.txt', 'r') as f:
contents = f.readlines()

print(contents)

def login():
ask_username = str(input('Username: '))
ask_password = str(input('Password: '))

read_logins()
