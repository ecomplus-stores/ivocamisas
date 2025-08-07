import getSections from "@ecomplus/storefront-template/template/js/netlify-cms/base-config/sections"
import getSettings from "@ecomplus/storefront-template/template/js/netlify-cms/base-config/collections/settings"
import getLayout from "@ecomplus/storefront-template/template/js/netlify-cms/base-config/collections/layout"
import getPages from "@ecomplus/storefront-template/template/js/netlify-cms/base-config/collections/pages"
import getBlogPosts from "@ecomplus/storefront-template/template/js/netlify-cms/base-config/collections/blog-posts"
import getExtraPages from "@ecomplus/storefront-template/template/js/netlify-cms/base-config/collections/extra-pages"
import getWidgets from "@ecomplus/storefront-template/template/js/netlify-cms/base-config/collections/widgets"

export default options => {
  options.sections = getSections(options).concat([

{
  "label": "[ALPIX] - Banners com Botões",
  "name": "apx-button-banners",
  "widget": "object",
  "fields": [
    {
      "label": "Banners",
      "name": "banners",
      "widget": "list",
      "fields": [
          {
              "label": "Imagem",
              "name": "img",
              "widget": "image"
          },
          {
            "label": "Imagem Mobile",
            "name": "mobile_img",
            "widget": "image",
            "required": false,
          },
          {
            "label": "Título",
            "name": "title",
            "widget": "string",
          },
          {
            "label": "Botões",
            "name": "buttons",
            "widget": "list",
            "fields": [
                {
                    "label": "Link",
                    "required": false,
                    "name": "link",
                    "widget": "string"
                },
                {
                  "label": "Texto botão",
                  "name": "btn_text",
                  "widget": "string",
                },
            ]
          },
      ]
    },
    {
      "label": "Título da Sessão",
      "name": "title",
      "widget": "string",
    }
  ]
},
{
  "label": "[ALPIX] - Banners em Abas",
  "name": "apx-tab-banners",
  "widget": "object",
  "fields": [
    {
        "label": "Abas",
        "name": "tabs",
        "widget": "list",
        "fields": [
            {
              "label": "Título",
              "name": "title",
              "widget": "string",
            },
            {
              "label": "Banners",
              "name": "banners",
              "widget": "list",
              "fields": [
                  {
                      "label": "Imagem",
                      "name": "img",
                      "widget": "image"
                  },
                  {
                    "label": "Imagem Mobile",
                    "name": "mobile_img",
                    "widget": "image",
                    "required": false,
                },
                  {
                      "label": "Link",
                      "required": false,
                      "name": "link",
                      "widget": "string"
                  },
                  {
                      "label": "Alt",
                      "required": false,
                      "name": "alt",
                      "widget": "string"
                  },
                  {
                    "label": "Título",
                    "name": "title",
                    "widget": "string",
                  },
                  {
                    "label": "Texto botão",
                    "name": "btn_text",
                    "widget": "string",
                  },
              ]
          },
        ]
    },
    {
      "label": "Título da Sessão",
      "name": "title",
      "widget": "string",
    }
  ]
},
{
  "label": "[ALPIX] - Banners em Círculo",
  "name": "apx-circle-list",
  "widget": "object",
  "fields": [
      {
          "label": "Banners",
          "name": "banners",
          "widget": "list",
          "fields": [
              {
                  "label": "Imagem",
                  "name": "img",
                  "widget": "image"
              },
              {
                  "label": "Link",
                  "required": false,
                  "name": "link",
                  "widget": "string"
              },
              {
                  "label": "Alt",
                  "required": false,
                  "name": "alt",
                  "widget": "string"
              },
              {
                "label": "Título",
                "name": "title",
                "widget": "string",
              },
          ]
      },
      {
        "label": "Título da Vitrine",
        "name": "title",
        "widget": "string",
      }
  ]
},
{
  "label": "Vitrine de imagens horizontal",
  "name": "grid-op",
  "widget": "object",
  "fields": [
    {
        "label": "Banners",
        "name": "banners",
        "widget": "list",
        "fields": [
            {
                "label": "Imagem",
                "name": "img",
                "widget": "image"
            },
            {
                "label": "Link",
                "required": false,
                "name": "link",
                "widget": "string"
            },
            {
                "label": "Alt",
                "required": false,
                "name": "alt",
                "widget": "string"
            }
        ]
    },
    {
      "label": "Título da Vitrine",
      "name": "title",
      "widget": "string",
    },
    {
      "label": "Tipo da Vitrine",
      "name": "type",
      "widget": "string",
    }
  ]
}, 
{
  "label": "Título de vitrine",
  "name": "title-block",
  "widget": "object",
  "required": false,
  "fields": [
    {
      "label": "Título do bloco",
      "name": "title",
      "required": false,
      "widget": "string",
    },
    {
      "label": "Link do Título",
      "name": "link",
      "required": false,
      "widget": "string",
    }
  ]
}, 
{
  label: "Grid de Avaliações",
  name: "review-carousel",
  widget: "object",
  icon: "https://api.iconify.design/bi:grid.svg",
  fields: [
      {
          label: "Avaliações",
          name: "reviews",
          widget: "list",
          fields: [
              {
                  label: "Imagem",
                  name: "img",
                  widget: "image",
                  required: false
              },
              {
                  label: "Nome",
                  required: false,
                  name: "nome",
                  widget: "string"
              },
              {
                  label: "Cidade",
                  required: false,
                  name: "cidade",
                  widget: "string"
              },
              {
                  label: "Texto de avaliação",
                  required: false,
                  name: "texto",
                  widget: "string"
              }
          ]
      },
      {
          label: "Avaliações autoplay",
          name: "autoplay",
          hint: 'Troca automática de avaliações, defina 0 para desabilitar autoplay',
          min: 0,
          step: 1000,
          default: 9000,
          widget: 'number'
      },
      {
          name: "title",
          label: "Título da estante de depoimentos",
          widget: 'string'
      }
  ]
}
])
  return {
    backend: {
      name: "git-gateway",
      branch: "master",
      commit_messages: {
        create: "Create {{collection}} “{{slug}}”",
        update: "Update {{collection}} “{{slug}}”",
        delete: "Delete {{collection}} “{{slug}}”",
        uploadMedia: "Upload “{{path}}”",
        deleteMedia: "[skip ci] Delete “{{path}}”",
        openAuthoring: "{{message}}"
      }
    },
    logo_url: "https://ecom.nyc3.digitaloceanspaces.com/storefront/cms.png",
    locale: "pt",
    load_config_file: Boolean(window.CMS_LOAD_CONFIG_FILE),
    media_folder: `${options.baseDir}template/public/img/uploads`,
    public_folder: "/img/uploads",
    slug: {
      encoding: "ascii",
      clean_accents: true,
      sanitize_replacement: "-"
    },
    collections: [
      getSettings(options),
      getPages(options),
      getLayout(options),
      getBlogPosts(options),
      getExtraPages(options),
      getWidgets(options),
      {
        name: 'category_list',        
        label: 'Patch e Tabela por categoria',
        description: 'Configure patchs e tabela de medida por categoria',
        folder: `${options.baseDir}content/category_list`,
        extension: 'json',
        create: true,
        slug: '{{slug}}',
        fields: [
          {
            label: 'Escolha a categoria',
            name: 'title',
            widget: 'select',
            required: false,
            options: options.state.routes
            .filter(el => el.resource === 'categories')
            .map((el) => ({
              label: el.name,
              value: el.slug || el.name.replaceAll(' ', '-')
            }))
          },
            {
                label: 'Listagem',
                name: 'slug_category',
                widget: 'list',
                icon: 'https://api.iconify.design/mdi:copyright.svg',
                required: false,
                fields: [
                  {
                    label: 'Escolha a categoria',
                    name: 'category',
                    widget: 'select',
                    required: false,
                    options: options.state.routes
                    .filter(el => el.resource === 'categories')
                    .map((el) => ({
                      label: el.name,
                      value: el.slug || el.name && el.name.toLowerCase().replaceAll(' ', '-')
                    }))
                  },
                  {
                        label: 'Lista de Patchs',
                        name: 'patch_list',
                        widget: 'list',
                        required: false,
                        fields: [
                            {
                                label: "Configuração do Patch",
                                name: "patch",
                                required: false,
                                widget: "object",
                                fields: [
                                    {
                                        "label": "Imagem do Patch",
                                        "name": "img_patch",
                                        "widget": "image",
                                        required: false,
                                    },
                                    {
                                        "label": "Preço do Patch",
                                        "name": "price_patch",
                                        "widget": "number",
                                        required: false
                                    },
                                    {
                                      "label": "Nome do patch",
                                      "name": "title",
                                      "widget": "string",
                                      required: false
                                    }
                                ]
                            }
                        ]
                  },
                  {
                    label: 'Tabela de tamanho',
                    name: 'size_guide_category',
                    widget: 'object',
                    required: false,
                    fields: [
                        {
                            "label": "Imagem da tabela de tamanhos",
                            "name": "img_guide",
                            "widget": "image",
                            required: false
                        },
                        {
                          "label": "Nome do bloco guia de tamanho",
                          "name": "title",
                          "widget": "string",
                          required: false
                        }
                    ]
                }
                ]
            }
        ]
      },
      {
        name: 'apx_product_sizetable',        
        label: 'Tabela de medidas inteligente',
        folder: `${options.baseDir}content/apx_sizetables`,
        extension: 'json',
        create: true,
        slug: '{{slug}}',
        "fields": [
          {
            "label": "Título",
            "name": "title",
            "widget": "string",
          },
          {
            label: 'Produtos (SKU)',
            name: 'skus',
            widget: 'select',
            multiple: true,
            required:false,
            options: [
              ...options.state.routes
              .filter(({ sku }) => typeof sku === 'string')
              .map(({ sku }) => ({
                label: 'Produto - ' + sku,
                value: sku
              }))
            ]                
          },
          {
            label: 'Categorias',
            name: 'categories',
            widget: 'select',
            multiple: true,
            required:false,
            options: [
              ...options.state.routes
              .filter(el => el.resource === 'categories')
              .map((el) => ({
                label: 'Categoria - ' + el.name,
                value: el._id
              }))
            ]               
          },
          {
            "label": "Imagem do Manequim",
            "name": "image",
            "widget": "image",
            required: false,
          },
          {
            "label": "Instruções",
            hint: 'Exibido logo abaixo da imagem do manequim',
            "name": "instructions",
            "widget": "text",
            required: false,
          },
          {
            "label": "Tamanhos",
            "name": "sizes",
            "widget": "list",
            "fields": [
              {
                "label": "Nome do Tamanho (P, M, G, 41, 42...)",
                "name": "title",
                "widget": "string",
              },
              {
                  "label": "Comprimento (cm)",
                  hint: 'Caso não preencha a medida não será exibida',
                  "required": false,
                  "name": "comprimento",
                  "widget": "string"
              },
              {
                "label": "Largura (cm)",
                hint: 'Caso não preencha a medida não será exibida',
                "required": false,
                "name": "largura",
                "widget": "string"
              },    
              {
                  "label": "Comprimento (cm) (2ª medida - Conjuntos)",
                  hint: 'Caso o produto não tenha um segundo tamanho, deixe em branco',
                  "required": false,
                  "name": "comprimento_2",
                  "widget": "string"
              },
              {
                "label": "Largura (cm) (2ª medida - Conjuntos)",
                hint: 'Caso o produto não tenha um segundo tamanho, deixe em branco',
                "required": false,
                "name": "largura_2",
                "widget": "string"
              },          
            ] 
          },      
        ]
      },
    ]
  }
}