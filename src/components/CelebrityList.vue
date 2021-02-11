<template>
    <div class="celeb-area">
        <div class="celeb-box">
            <img src="../assets/img/waqar-zaka.jpeg" alt="Waqar Zaka - Social media personality"/>
            <h3>Waqar Zaka</h3>
            <p>Social Media personality</p>
            <div class="rating">
                <input type="radio" id="star5" name="rating" value="5" /><label for="star5" title="Rocks!"></label>
                <input type="radio" id="star4" name="rating" value="4" /><label for="star4" title="Pretty good"></label>
                <input type="radio" id="star3" name="rating" value="3" /><label for="star3" checked="checked" title="Average"></label>
                <input type="radio" id="star2" name="rating" value="2" /><label for="star2" title="Kinda bad"></label>
                <input type="radio" id="star1" name="rating" value="1" /><label for="star1" title="Sucks big time"></label>
            </div>
        </div>

        <div class="celeb-box">
            <img src="../assets/img/dr-aamir-liaquat-hussain.jpg" alt="Dr Aamir Liaquat Hussain - Media Personality"/>
            <h3>Aamir Liaquat Hussain </h3>
            <p>Media Personality</p>
            <div class="rating">
                <input type="radio" id="star10" name="rating2" value="5" /><label for="star10" title="Rocks!"></label>
                <input type="radio" id="star9" name="rating2" value="4" checked="checked" /><label for="star9" title="Pretty good"></label>
                <input type="radio" id="star8" name="rating2" value="3" /><label for="star8" title="Average"></label>
                <input type="radio" id="star7" name="rating2" value="2" /><label for="star7" title="Kinda bad"></label>
                <input type="radio" id="star6" name="rating2" value="1" /><label for="star6" title="Sucks big time"></label>
            </div>
        </div>

        <div class="celeb-box">
            <img src="../assets/img/waqar-zaka.jpeg" alt="Waqar Zaka - Social media personality"/>
            <h3>Waqar Zaka</h3>
            <p>Social Media personality</p>
            <div class="rating">
                <input type="radio" id="star5" name="rating" value="5" /><label for="star5" title="Rocks!"></label>
                <input type="radio" id="star4" name="rating" value="4" /><label for="star4" title="Pretty good"></label>
                <input type="radio" id="star3" name="rating" value="3" /><label for="star3" title="Average"></label>
                <input type="radio" id="star2" name="rating" value="2" /><label for="star2" title="Kinda bad"></label>
                <input type="radio" id="star1" name="rating" value="1" /><label for="star1" title="Sucks big time"></label>
            </div>
        </div>
    </div>

</template>

<script>
    export default {
        name: "CelebrityList"
    }
</script>