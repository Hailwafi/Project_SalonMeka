@extends('layouts.main')

@section('container')

<?php
    $heroTitle = "About Beauty Salon";
    $description = "Lorem Ipsum Dolor Sit";
    $backgroundImage = 'img/bg12.jpg';  
    $showButton = false; // Tombol Book Now disembunyikan
?>
@include('partials.heroSection');

    <section class="site-section">
        <div class="container">
            <div class="row align-items-center">
                <div class="col-md-4">
                    <div class="heading-wrap  element-animate">
                        <h2 class="heading">Our Story</h2>
                        <p class="">At Our Beauty Salon, beauty isn't just a service — it's an experience. Nestled in the heart of the city,
                            we blend modern techniques with timeless elegance to bring out the best in you. 
                            </p>
                        <p>From precision hair styling to luxurious spa treatments, our expert team is passionate about helping you look and feel fabulous.
                        Come for the glow-up, stay for the vibes.</p>
                    </div>
                </div>
                <div class="col-md-1"></div>
                <div class="col-md-7">
                    <img src="img/f_img_1.png" alt="Image placeholder" class="img-md-fluid">
                </div>
            </div>
        </div>
    </section>
    <!-- END section -->
@endsection
