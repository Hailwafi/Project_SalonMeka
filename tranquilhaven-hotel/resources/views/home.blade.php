@extends('layouts.main')

@section('container')
    <?php
    $heroTitle = 'Welcome To Our Beauty Salon';
    $description = 'Lorem Ipsum Dolor Sit';
    $backgroundImage = 'img/bg6.jpeg';
    $showButton = true; //to show book now button
    ?>

  


    @if(session('login'))
    <script>
        Swal.fire({
            title: 'Success!',
            text: "{{ session('login') }}",
            icon: 'success',
            confirmButtonText: "Oke",
        });
    </script>
    @endif


    @include('partials.heroSection');

    <section class="site-section">
        <div class="container">
            <div class="row align-items-center">
                <div class="col-md-4">
                    <div class="heading-wrap text-center element-animate">
                        <h4 class="sub-heading">Book Our Services</h4>
                        <h2 class="heading">Book Our Top Tier Services</h2>
                        <p class="mb-5">Welcome to Radiant Oasis, where beauty meets brilliance!
                             Our salon is not just a place to get a fresh look; it's a sanctuary where art, 
                             science, and a touch of magic blend to enhance your natural charm. From precision 
                             cuts to transformative treatments, we pride ourselves on forward-thinking techniques 
                             and an eye for design that leaves you feeling empowered and uniquely radiant. Come for the glow, 
                             stay for the good vibes—and a few clever puns along the way! </p>
                        <p><a href="#" class="btn btn-primary btn-sm">More About Us</a></p>
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
<!--
    <section class="site-section bg-light">
        <div class="container">
            <div class="row mb-5">
                <div class="col-md-12 heading-wrap text-center">
                    <h4 class="sub-heading">Our Luxury Rooms</h4>
                    <h2 class="heading">Featured Rooms</h2>
                </div>
            </div>
            <div class="row ">
                <div class="col-md-7 mb-4">
                    <div class="media d-block room mb-0">
                        <figure class="w-100">
                            <img src="{{ asset($room[0]->image) }}" alt="Generic placeholder image" class="img-fluid w-100">
                            <div class="overlap-text">
                                <span>
                                    Featured Room
                                    <span class="ion-ios-star"></span>
                                    <span class="ion-ios-star"></span>
                                    <span class="ion-ios-star"></span>
                                </span>
                            </div>
                        </figure>
                        <div class="media-body">
                            <h3 class="mt-0"><a href="/room/{{ $room[0]->slug }}">{{ $room[0]->title }}</a></h3>
                            <ul class="room-specs">
                                <li><span class="ion-ios-people-outline"></span>{{ $room[0]->guests }} Guests</li>
                                <li><span class="ion-ios-crop"></span>{{ $room[0]->size }}ft</li>
                            </ul>
                            <p>{{ Str::limit(strip_tags($room[0]->description, 200)) }}</p>
                            <p><a href="/room/{{ $room[0]->slug }}" class="btn btn-primary btn-sm">Read more </a></p>
                        </div>
                    </div>
                </div>
                <div class="col-md-5 room-thumbnail-absolute">
                    <a href="#" class="media d-block room bg first-room"
                        style="background-image: url(img/img_2.jpg); ">
                      
                        <div class="overlap-text">
                            <span>
                                Hotel Room
                                <span class="ion-ios-star"></span>
                                <span class="ion-ios-star"></span>
                                <span class="ion-ios-star"></span>
                            </span>
                            <span class="pricing-from">
                                from $360
                            </span>
                        </div>
                      
                    </a>
                    <a href="#" class="media d-block room bg second-room"
                        style="background-image: url(img/img_4.jpg); ">
                        
                        <div class="overlap-text">
                            <span>
                                Hotel Room
                                <span class="ion-ios-star"></span>
                                <span class="ion-ios-star"></span>
                                <span class="ion-ios-star"></span>
                            </span>
                            <span class="pricing-from">
                                from $200
                            </span>
                        </div>
                       
                    </a>
                </div>
            </div>
        </div>
    </section>
    -->
    <section class="site-section bg-light">
        <div class="container">
            <div class="row mb-5">
                <div class="col-md-12 heading-wrap text-center">
                    <h4 class="sub-heading">Our Rooms</h4>
                    <h2 class="heading">Our Recommendation Rooms</h2>
                </div>
            </div>
            <div class="row ">
                <div class="col-md-4">
                    <div class="post-entry">
                        <img src="img/img_5.jpg" alt="Image placeholder" class="img-fluid">
                        <div class="body-text">
                            <div class="category">Presidential Rooms</div>
                            <h3 class="mb-3"><a href="/rooms?category=presidential">The Presidential Suite</a></h3>
                            <p class="mb-4">Indulge in luxury with premium amenities and personalized service in our
                                Presidential Suite.</p>
                            <p><a href="/rooms?category=presidential"
                                    class="btn btn-primary btn-outline-primary btn-sm">See More</a></p>
                        </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="post-entry">
                        <img src="img/img_1.jpg" alt="Image placeholder" class="img-fluid">
                        <div class="body-text">
                            <div class="category">Luxury Rooms</div>
                            <h3 class="mb-3"><a href="/rooms?category=luxury">The Luxury Suite</a></h3>
                            <p class="mb-4">Indulge in elegance and comfort with our Luxury Suite, featuring premium
                                services, and stunning views of the city skyline.</p>
                            <p><a href="/rooms?category=luxury" 
                                class="btn btn-primary btn-outline-primary btn-sm">See More</a></p>
                        </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="post-entry">
                        <img src="img/img_3.jpg" alt="Image placeholder" class="img-fluid">
                        <div class="body-text">
                            <div class="category">Deluxe Rooms</div>
                            <h3 class="mb-3"><a href="/rooms?category=deluxe">Deluxe Family Room</a></h3>
                            <p class="mb-4">Relax in spacious comfort with family in our deluxe room, offering convenient
                                amenities and peaceful atmosphere.</p>
                            <p><a href="/rooms?category=deluxe" 
                                class="btn btn-primary btn-outline-primary btn-sm">See More</a></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
@endsection
