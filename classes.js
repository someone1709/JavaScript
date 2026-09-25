class user {
  constructor(username, email, password) {
    this.username = username;
    this.email = email;
    this.password = password;
  }
  changeusername() {
    return `${this.username.toUpperCase()}`
    //return statement is must

  }
  encryptPassword() {
    return `${this.password}abcd`;
  }
}

const value = new user("sandeEp", "sandyicloud@icloud.com", 12345678);
console.log(value.changeusername());
console.log(value.encryptPassword());
