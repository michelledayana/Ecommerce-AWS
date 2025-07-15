package com.usuario.controller;

import graphql.kickstart.tools.GraphQLMutationResolver;
import org.springframework.stereotype.Component;
import com.usuario.model.User;
import com.usuario.dto.UserInput;
import com.usuario.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;

@Component
public class MutationResolver implements GraphQLMutationResolver {

    @Autowired
    private UserService userService;

    public User updateUser(Long id, UserInput userInput) {
        return userService.updateUser(id, userInput);
    }
}
