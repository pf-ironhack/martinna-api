require("dotenv").config();
require('../configs/db.config');

const createError = require('http-errors');
const Brand = require('../models/brand.model');
const axios = require('axios');
const PH_TOKEN = process.env.PH_TOKEN;
const topic = 74;
const API_URL = `https://api.producthunt.com/v1/posts/all?search[topic]=${topic}&access_token=${PH_TOKEN}`

axios.get(API_URL)
  .then(brands => {
    brands.data.posts.forEach(brand => {
      //add here Brand.findOne({title: brand.name})
      Brand.findOne({title: brand.name})
        .then(b => {
          if (b) {
            throw createError(409, 'Brand already registered')
          } else {
            const br = new Brand({
              title: brand.name,
              logo: brand.thumbnail.image_url,
              description: brand.tagline,
              tags: [brand.topics[0].name],
              creators: brand.makers,
              webLink: brand.redirect_url,
            })
            Brand.create(br)
          }
          
        })
    })

  })
  .catch(console.error)