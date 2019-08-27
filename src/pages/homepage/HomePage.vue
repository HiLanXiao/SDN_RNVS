<template>
  <div class="main-box">
    <el-container>
      <el-aside width="201px">
        <el-menu
          default-active="1"
          :default-openeds="['1', '2']"
          class="el-menu-vertical-demo"
          text-color="#fff"
          active-text-color="#ffd04b"
          background-color="#545c64"
        >
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-menu"></i>
              <span>链路信息操作</span>
            </template>
            <el-menu-item-group>
              <el-menu-item @click="currentTabComponent = 'Topo'"
                >实时链路图</el-menu-item
              >
              <el-menu-item @click="stopDevice()">停宕设备</el-menu-item>
              <el-menu-item @click="activeDevice()">激活设备</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="2">
            <template slot="title"
              ><i class="el-icon-time"></i>链路数据统计</template
            >
            <el-menu-item-group>
              <el-menu-item @click="currentTabComponent = 'ItemizedStatistics'">
                丢包/带宽数据统计
              </el-menu-item>
              <el-menu-item @click="currentTabComponent = 'OverallStatistics'">
                最近七日链路信息统计
              </el-menu-item>
            </el-menu-item-group>
          </el-submenu>
        </el-menu>
      </el-aside>
      <el-main>
        <el-header height="60px">
          <img class="topo" src="../../../public/static/images/topo.png" />
          <img class="argus" src="../../../public/static/images/argus.png" />
          <div class="myMessage">
            <el-dropdown>
              <i
                class="el-icon-setting"
                style="margin-right:7px;color:white"
              ></i>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item>我的信息</el-dropdown-item>
                <el-dropdown-item>注销</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
            <span style="margin-right:20px;color:white">张澜潇</span>
          </div>
        </el-header>
        <component :is="currentTabComponent"></component>
      </el-main>
    </el-container>
    <el-dialog
      title="请选择要停宕的设备"
      :visible.sync="stopDeviceVisible"
      width="45%"
      top="6vh"
      center
    >
      <el-select v-model="value" placeholder="请选择要停宕的设备">
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        >
        </el-option>
      </el-select>
    </el-dialog>
    <el-dialog
      title="请选择要激活的设备"
      :visible.sync="activeDeviceVisible"
      width="45%"
      top="6vh"
      center
    >
      <el-select v-model="value" placeholder="请选择要激活的设备">
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        >
        </el-option>
      </el-select>
    </el-dialog>
  </div>
</template>

<script>
import Topo from "./components/Topo";
import ItemizedStatistics from "./components/ItemizedStatistics";
import OverallStatistics from "./components/OverallStatistics";
export default {
  name: "HomePage",
  components: {
    Topo,
    ItemizedStatistics,
    OverallStatistics
  },
  data() {
    return {
      currentTabComponent: "Topo",
      stopDeviceVisible: false,
      activeDeviceVisible: false,
      options: [
        {
          value: "选项1",
          label: "pc1"
        },
        {
          value: "选项2",
          label: "pc2"
        },
        {
          value: "选项3",
          label: "server1"
        },
        {
          value: "选项4",
          label: "server2"
        },
        {
          value: "选项5",
          label: "switch1"
        },
        {
          value: "选项6",
          label: "switch2"
        }
      ],
      value: ""
    };
  },
  methods: {
    stopDevice() {
      this.currentTabComponent = "Topo";
      this.stopDeviceVisible = !this.stopDeviceVisible;
    },
    activeDevice() {
      this.currentTabComponent = "Topo";
      this.activeDeviceVisible = !this.activeDeviceVisible;
    }
  }
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}

.el-container {
  height: 790px;
}

.el-aside {
  height: 100%;
}

.el-menu {
  height: 100%;
  border: 0px;
}

.el-main {
  padding: 0;
}

.el-header {
  background-color: #757e86;
  padding: 0;
  margin-bottom: 40px;
  line-height: 60px;
}

.topo {
  width: 50px;
  height: 50px;
  position: relative;
  bottom: 5px;
  left: 10px;
}

.argus {
  width: 200px;
  height: 60px;
  margin-left: -10px;
  position: relative;
  bottom: -2px;
  left: 10px;
}

.myMessage {
  float: right;
}

.el-select {
  width: 100%;
}
</style>
