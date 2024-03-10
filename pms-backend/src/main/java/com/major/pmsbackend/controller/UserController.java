// package com.major.pmsbackend.controller;

// import org.springframework.beans.factory.annotation.Autowired;
// // import org.springframework.web.bind.annotation.GetMapping;
// // import org.springframework.web.bind.annotation.PathVariable;
// import org.springframework.web.bind.annotation.PostMapping;
// import org.springframework.web.bind.annotation.RequestBody;
// import org.springframework.web.bind.annotation.RequestMapping;
// import org.springframework.web.bind.annotation.RestController;

// import com.major.pmsbackend.entity.Users;
// import com.major.pmsbackend.service.UserService;

// @RestController
// @RequestMapping("/user/")
// public class UserController {
//     @Autowired
//     UserService userService;
//     @PostMapping("register")
//     public Users registerUser(@RequestBody Users user) {
//         Users userData=userService.registerUserData(user);
//         return userData; 
//     }
//     // @GetMapping("details/{email}")
//     // public Users loginUser(@PathVariable String email) {
//     //     Users userData=userService.loginUserData(email);
//     //     return userData;
//     // }
    
// }
