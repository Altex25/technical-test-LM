package com.example.product.dao;

import com.example.product.entity.Product;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.namedparam.MapSqlParameterSource;
import org.springframework.jdbc.core.simple.SimpleJdbcInsert;
import org.springframework.stereotype.Component;

import javax.sql.DataSource;

@Slf4j
@Component
public class ProductDao {

    private final SimpleJdbcInsert simpleJdbcInsert;

    @Autowired
    public ProductDao(DataSource dataSource) {
        this.simpleJdbcInsert = new SimpleJdbcInsert(dataSource)
                .withTableName("product")
                .usingGeneratedKeyColumns("id");
    }

    public long insert(Product product) {
        MapSqlParameterSource params = new MapSqlParameterSource();
        params.addValue("name", product.getName());
        params.addValue("price", product.getPrice());

        Number newId = simpleJdbcInsert.executeAndReturnKey(params);
        long generatedId = newId.longValue();

        log.info("Inserting new product with id : {}", generatedId);

        return generatedId;
    }
}