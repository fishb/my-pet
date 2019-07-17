<template>
<div>
    <div class="choice" @click="choiceCity()">{{youChoiceCityName}}</div>
	<div class="choice" @click="choiceCity2()">{{youChoiceCityName2}}</div>
    <city :is-show.sync='city.isShow'
	            :on-choose='city.onChoose'
	            :city-data='city.cityData'
	            :local-city='city.localCity'
	            :star-city='city.starCity'
				:close="close"
	            ></city>
	        <city
				:simple='true'
	            :is-show.sync='city2.isShow'
	            :on-choose='city2.onChoose'
	            :city-data='city2.cityData'
	            :local-city='city2.localCity'
	            :star-city='city2.starCity'
				:close="close"
	            ></city>
</div>
</template>

<script>
import city from 'vue-city';
export default {
    name:'City',
        data(){
            return {
				youChoiceCityName: '请选择城市...',
                youChoiceCityName2: '请选择城市...',
                city: {
                    isShow: false,
                    cityData: [],
                    onChoose: null,
                    localCity: {},
                    starCity: []
                },
                city2: {
                    isShow: false,
                    cityData: [],
                    onChoose: null,
                    localCity: {},
                    starCity: []
                },
            }
        },
        components: {
            city,
        },
        ready(){
            let _this = this;
            this.getCityInfo();
            this.city.onChoose = function(res){
                //ToDo: 选完城市后......
                console.log(res);
				_this.city.isShow = false;
                _this.youChoiceCityName = '你选的城市是：' + res.cityName;
            }
			this.city2.onChoose = function(res){
                //ToDo: 选完城市后......
                console.log(res);
				_this.city2.isShow = false;
                _this.youChoiceCityName2 = '你选的城市是：' + res.cityName;
            }
        },
        methods: {
            getCityInfo: function(){
                this.city.starCity = [
                    {
                       cityId: 301,
                       cityName: "保山",
                       citySpell: "BAOSHAN",
                       cityFirstLetter: "B",
                    },
                    {
                        cityId: 167,
                        cityName: "日照",
                        citySpell: "RIZHAO",
                        cityFirstLetter: "R",
                    },
                ]

                this.city.cityData = [
                    {
                        cityId: 290,
                        cityName: "阿坝州",
                        citySpell: "ABAZHOU",
                        cityFirstLetter: "A",
                    }, {
                        cityId: 348,
                        cityName: "阿克苏地区",
                        citySpell: "AKESUDIQU",
                        cityFirstLetter: "A",
                    }, {
                        cityId: 348,
                        cityName: "阿克苏地区",
                        citySpell: "AKESUDIQU",
                        cityFirstLetter: "A",
                    }
                ];
                this.city.localCity = {
                    cityId: 301,
                    cityName: "保山",
                    citySpell: "BAOSHAN",
                    cityFirstLetter: "B",
                }
				this.city2.cityData = [{
					cityId: 290,
					cityName: "阿坝州",
				},
				{
					cityId: 290,
					cityName: "阿坝州2",
				}]
            },
            choiceCity () {
                this.city.isShow = true;
            },
			choiceCity2 () {
				this.city2.isShow = true;
			},
			close(){
				this.city.isShow = false;
				this.city2.isShow = false;
			}
        }
    }
</script>

<style>

</style>
