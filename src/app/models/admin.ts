// src/app/models/admin.model.ts
export class Admin {
    adminId: number;
    adminName: string;
    adminpassword: string;
    adminemail: string;
  
  
    constructor(adminId: number=0, adminName: string="" ,adminpassword: string="", adminemail: string="") {
      this.adminId = adminId;
      this.adminName = adminName;
      this.adminpassword = adminpassword;
      this.adminemail = adminemail;
    }
  }
  