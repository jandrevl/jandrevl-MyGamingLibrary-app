package com.ironhack.userservice;

import com.ironhack.userservice.enums.Platform;
import com.ironhack.userservice.utils.PasswordUtil;

public class Main {
    public static void main(String[] args) {
        System.out.println(PasswordUtil.encryptPassword("password"));

    }
}
