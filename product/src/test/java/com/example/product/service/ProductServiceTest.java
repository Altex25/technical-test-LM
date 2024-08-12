package com.example.product.service;

import com.example.product.entity.Product;
import jakarta.transaction.Transactional;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.List;

@SpringBootTest
public class ProductServiceTest {

    @Autowired
    private ProductService productService;

    @Test
    public void whenApplicationStarts_createsInitialData() {
        List<Product> products = productService.getAllProducts();

        Assertions.assertEquals(products.size(), 2);
    }

    @Test
    @Transactional
    public void createProductTest() {
        int sizeBefore = productService.getAllProducts().size();
        Product product = new Product("productTest", 17);

        productService.createProduct(product);

        Assertions.assertEquals(productService.getAllProducts().size(), sizeBefore + 1);
    }
}
