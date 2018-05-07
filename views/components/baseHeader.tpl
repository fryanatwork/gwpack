<header class="header">
    <nav class="navbar navbar-expand-lg navbar-light">
      <div class="container">
        <router-link
          class="navbar-brand"
          :style="{'background-image': 'url(' + logo + ')'}"
          to="/"
          exact
        >
          @@TEXT>sitename
        </router-link>
        <button class="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="navbar-collapse collapse" id="navbarCollapse">
          <ul class="navbar-nav mr-auto">
            <li
              class="nav-item"
              v-for="item, name in siteSettings.data().menuKeys"
              :key="name"
              :class="[name, {'socialmedia': item.insite === false }]"
            >
              <template v-if="item.insite === true">
                <router-link
                  :to="'/' + item.link"
                  class="nav-link"
                  exact
                >{{item.title}}</router-link>
              </template>
<!-- @@var path -->
              <template v-else>
                <a
                  class="nav-link"
                  target="_blank"
                  v-html="item.title"
                  :alt="item.title"
                  :href="item.link"
                  :style="{'background-image': 'url(' + checkImg(item.title) + ')'}"
                ></a>
              </template>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>