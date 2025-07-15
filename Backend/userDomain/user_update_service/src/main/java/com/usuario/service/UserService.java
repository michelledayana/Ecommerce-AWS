package com.usuario.service;

import com.usuario.dto.UserInput;
import com.usuario.model.User;
import com.usuario.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    public User updateUser(Long id, UserInput userInput) {
        Optional<User> optionalUser = userRepository.findById(id);
        if (!optionalUser.isPresent()) {
            throw new RuntimeException("User not found");
        }

        User user = optionalUser.get();
        user.setName(userInput.getName());
        user.setEmail(userInput.getEmail());
        user.setPassword(userInput.getPassword());

        return userRepository.save(user);
    }
}
