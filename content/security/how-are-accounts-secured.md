---
title: How are the accounts secured?
description: Safety is paramount at Gravitalia
---

# Accounts security
> Welcome! We love users who check the security of the services!

*Know that our codes are [`open source`](https://github.com/Gravitalia)*

<br /><br />

## How does the data flow?
> As you can see, our data is transmitted under the HTTPS protocol, which uses the TLS cryptographic protocol to encrypt the data.

## How is the data stored?
The specifications are usually put in the READ ME of open-source projects. However, to answer you here, we use:
- SHA3(-Keccak256) to hash email addresses, so they will never be readable by our services
- Argon2 to hash your passwords (they are not readable anymore, and very expensive to break, i.e. to test the possible combinations). *Argon2 won the Password Hashing Competition*
- ChaCha20poly1305 to secure other sensitive information (date of birth, phone number...). *This protocol is used to secure connections between your browser and websites*