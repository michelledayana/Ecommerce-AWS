package com.usuario.service;

import com.usuario.model.User;
import com.usuario.repository.UserRepository;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class UserService {
    private final UserRepository repo;

    public UserService(UserRepository repo) {
        this.repo = repo;
    }

    public User updateUser(Long id, User userDetails) throws Exception {
        Optional<User> userOptional = repo.findById(id);
        if (!userOptional.isPresent()) {
            throw new Exception("User not found");
        }
        User user = userOptional.get();
        user.setName(userDetails.getName());
        user.setEmail(userDetails.getEmail());
        user.setPassword(userDetails.getPassword());
        return repo.save(user);
    }
}
