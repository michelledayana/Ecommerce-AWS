package com.usuario.controller;

import com.usuario.dto.UserInput;
import com.usuario.model.User;
import com.usuario.service.UserService;
import graphql.kickstart.tools.GraphQLMutationResolver;
import org.springframework.stereotype.Component;

@Component
public class UserResolver implements GraphQLMutationResolver {

    private final UserService userService;

    public UserResolver(UserService userService) {
        this.userService = userService;
    }

    public User updateUser(Long id, UserInput user) throws Exception {
        User userToUpdate = new User();
        userToUpdate.setName(user.getName());
        userToUpdate.setEmail(user.getEmail());
        userToUpdate.setPassword(user.getPassword());

        return userService.updateUser(id, userToUpdate);
    }
}
