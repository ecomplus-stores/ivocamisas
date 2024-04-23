import getSections from "@ecomplus/storefront-template/template/js/netlify-cms/base-config/sections"
import getSettings from "@ecomplus/storefront-template/template/js/netlify-cms/base-config/collections/settings"
import getLayout from "@ecomplus/storefront-template/template/js/netlify-cms/base-config/collections/layout"
import getPages from "@ecomplus/storefront-template/template/js/netlify-cms/base-config/collections/pages"
import getBlogPosts from "@ecomplus/storefront-template/template/js/netlify-cms/base-config/collections/blog-posts"
import getExtraPages from "@ecomplus/storefront-template/template/js/netlify-cms/base-config/collections/extra-pages"
import getWidgets from "@ecomplus/storefront-template/template/js/netlify-cms/base-config/collections/widgets"

export default options => {
  options.sections = getSections(options).concat([{
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
}])
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
                label: 'Ordenação Submenu',
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
                      value: el._id
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
      }
    ]
  }
}