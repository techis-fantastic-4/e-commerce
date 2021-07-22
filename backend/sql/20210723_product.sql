-- -------------------------------------------------------------
-- TablePlus 4.0.0(370)
--
-- https://tableplus.com/
--
-- Database: da684v60b2s0m4
-- Generation Time: 2021-07-23 00:37:15.8590
-- -------------------------------------------------------------

-- How to import on your local
-- > sqlite3 db.sqlite3
-- > .read sql/20210723_product.sql

INSERT INTO "product" ("status", "name", "description", "main_image", "sku", "quantity", "price", "discount_price", "created_at", "updated_at", "category_name") VALUES
('open', 'Asus Laptop', 'A mobile laptop that can save you ton of time on the go !', 'image/upload/v1626894175/doaefm8f5koaez839cgb.png', 101, 10, 200.00, 0.00, '2021-07-21 19:02:57.439024+00', '2021-07-21 19:02:57.439066+00', 'laptop'),
('open', 'Asus Nitro', 'A mobile laptop that can save you ton of time on the go !', 'image/upload/v1626894207/oar2fyibc4qrtlftopaa.png', 102, 100, 300.00, 0.00, '2021-07-21 19:03:28.656411+00', '2021-07-21 19:03:28.656461+00', 'laptop'),
('open', 'Lenovo Laptop', 'A mobile laptop that can save you ton of time on the go !', 'image/upload/v1626894261/ktadr5sc5nx4a60uswmt.png', 103, 10, 250.00, 0.00, '2021-07-21 19:04:22.679158+00', '2021-07-21 19:04:22.679199+00', 'laptop'),
('open', 'MacBook Pro', 'A mobile laptop that can save you ton of time on the go !', 'image/upload/v1626894301/l5hwxa2mvvxymx0xdaxa.png', 104, 10, 800.00, 0.00, '2021-07-21 19:05:02.643217+00', '2021-07-21 19:05:02.643258+00', 'laptop'),
('open', 'Black Magic 6k', 'Capture life in motion, tell stories to the world, be the front man to new experiences !', 'image/upload/v1626894395/rmoivbp0zeocigcjoo8n.png', 201, 10, 600.00, 0.00, '2021-07-21 19:06:36.162189+00', '2021-07-21 19:06:36.162236+00', 'camera'),
('open', 'Canon 80D', 'Capture life in motion, tell stories to the world, be the front man to new experiences !', 'image/upload/v1626894435/pwstjrss5y0utoejvzm7.png', 202, 10, 800.00, 0.00, '2021-07-21 19:07:16.99356+00', '2021-07-21 19:07:16.993612+00', 'camera'),
('open', 'Canon Cam', 'Capture life in motion, tell stories to the world, be the front man to new experiences !', 'image/upload/v1626894471/vkn0n6vbomuqupng601b.png', 203, 10, 700.00, 0.00, '2021-07-21 19:07:52.606948+00', '2021-07-21 19:07:52.607003+00', 'camera'),
('open', 'Sony A9', 'Capture life in motion, tell stories to the world, be the front man to new experiences !', 'image/upload/v1626894532/ttdctoi3osdyyhtxlgow.png', 204, 10, 500.00, 0.00, '2021-07-21 19:08:53.27802+00', '2021-07-21 19:08:53.278072+00', 'camera'),
('open', 'Apply Watch Ch', 'Utilities power your life, get your add on today, upgrade your life !', 'image/upload/v1626894627/r4saxk2omcjep9q0bgbg.png', 301, 10, 200.00, 0.00, '2021-07-21 19:10:27.691876+00', '2021-07-21 19:10:27.69193+00', 'watch'),
('open', 'iWatch Black', 'Having time on your hand is not enough ,for the new smart gen get a watch that compliments you', 'image/upload/v1626894714/av7vex8tupakz5mytfad.png', 302, 10, 500.00, 0.00, '2021-07-21 19:11:55.496356+00', '2021-07-21 19:11:55.496407+00', 'watch'),
('open', 'iWatch Blue', 'Having time on your hand is not enough ,for the new smart gen get a watch that compliments you', 'image/upload/v1626894770/i7umrrj0farnehhzrrb0.png', 303, 10, 500.00, 0.00, '2021-07-21 19:12:51.564139+00', '2021-07-21 19:12:51.564187+00', 'watch'),
('open', 'iWatch White', 'Having time on your hand is not enough ,for the new smart gen get a watch that compliments you', 'image/upload/v1626894799/ujvviku9uvwlyflchykx.png', 304, 10, 500.00, 0.00, '2021-07-21 19:13:20.723274+00', '2021-07-21 19:13:20.723315+00', 'watch'),
('open', 'iWatch RGold', 'Having time on your hand is not enough ,for the new smart gen get a watch that compliments you', 'image/upload/v1626894843/klsm01qwcduwvhnxvcst.png', 305, 10, 500.00, 0.00, '2021-07-21 19:14:04.256266+00', '2021-07-21 19:14:04.256309+00', 'watch'),
('open', 'iWatch FWhite', 'Having time on your hand is not enough ,for the new smart gen get a watch that compliments you', 'image/upload/v1626894882/ezu0sl43esfhdrh3y2vl.png', 306, 10, 500.00, 0.00, '2021-07-21 19:14:43.534878+00', '2021-07-21 19:14:43.534932+00', 'watch'),
('open', 'Noice Watch', 'Having time on your hand is not enough ,for the new smart gen get a watch that compliments you', 'image/upload/v1626894918/bu5aopgssgajp3midwbg.png', 307, 10, 200.00, 0.00, '2021-07-21 19:15:19.251954+00', '2021-07-21 19:15:19.252+00', 'watch'),
('draft', 'Samsung Fold', 'If your world is in your pocket, make sure it is the way you love it, get your world and make it yours.', 'image/upload/v1626895020/aotejjjrqsklv3n2wld6.png', 401, 10, 300.00, 0.00, '2021-07-21 19:17:00.734797+00', '2021-07-21 19:17:00.734849+00', 'phone'),
('open', 'Iphone 12', 'If your world is in your pocket, make sure it is the way you love it, get your world and make it yours.', 'image/upload/v1626895056/l9s52vrrhgzhp9k0otvw.png', 402, 10, 900.00, 0.00, '2021-07-21 19:17:36.819927+00', '2021-07-21 19:17:36.819977+00', 'phone'),
('open', 'Iphone 11', 'If your world is in your pocket, make sure it is the way you love it, get your world and make it yours.', 'image/upload/v1626895092/kgm6lhnpkwzb4uuy2gix.png', 403, 10, 850.00, 0.00, '2021-07-21 19:18:12.975962+00', '2021-07-21 19:18:12.976005+00', 'phone'),
('open', 'Iphone 12 Max', 'If your world is in your pocket, make sure it is the way you love it, get your world and make it yours.', 'image/upload/v1626895122/roeznoofhviflkkqxcxx.png', 304, 10, 1000.00, 0.00, '2021-07-21 19:18:42.903328+00', '2021-07-21 19:18:42.903378+00', 'phone'),
('open', 'Nokia x20', 'If your world is in your pocket, make sure it is the way you love it, get your world and make it yours.', 'image/upload/v1626895161/q2nwlztajeblaoixgljf.png', 405, 10, 400.00, 0.00, '2021-07-21 19:19:22.283982+00', '2021-07-21 19:19:22.284027+00', 'phone'),
('open', 'OnePlus 8 Pro', 'If your world is in your pocket, make sure it is the way you love it, get your world and make it yours.', 'image/upload/v1626895210/hygigrdhl7zfmznlyfej.png', 406, 10, 500.00, 0.00, '2021-07-21 19:20:10.86347+00', '2021-07-21 19:20:10.863516+00', 'phone'),
('open', 'OnePlus 8 Slat', 'If your world is in your pocket, make sure it is the way you love it, get your world and make it yours.', 'image/upload/v1626895280/gfvxm4wnne9y4zzhnyiv.png', 407, 10, 400.00, 0.00, '2021-07-21 19:21:20.780802+00', '2021-07-21 19:21:20.780847+00', 'phone'),
('open', 'OnePlus 9', 'If your world is in your pocket, make sure it is the way you love it, get your world and make it yours.', 'image/upload/v1626895320/riqkuivvlpv5oaagzvt9.png', 408, 10, 700.00, 0.00, '2021-07-21 19:22:01.010956+00', '2021-07-21 19:22:01.011011+00', 'phone'),
('open', 'Oppo f19', 'If your world is in your pocket, make sure it is the way you love it, get your world and make it yours.', 'image/upload/v1626895356/dgl2x6nbbl2y2ub4wg0h.png', 409, 10, 300.00, 0.00, '2021-07-21 19:22:37.884054+00', '2021-07-21 19:22:37.884102+00', 'phone'),
('open', 'Oppo REno o2', 'If your world is in your pocket, make sure it is the way you love it, get your world and make it yours.', 'image/upload/v1626895395/pimvpq2jjhid5jbfayxf.png', 410, 10, 600.00, 0.00, '2021-07-21 19:23:16.613639+00', '2021-07-21 19:23:16.613686+00', 'phone'),
('open', 'Samsung s21', 'If your world is in your pocket, make sure it is the way you love it, get your world and make it yours.', 'image/upload/v1626895433/b8ahbgywvhjh5stslvbv.png', 411, 10, 800.00, 0.00, '2021-07-21 19:23:54.304633+00', '2021-07-21 19:23:54.304684+00', 'phone'),
('open', 'Samsung Note', 'If your world is in your pocket, make sure it is the way you love it, get your world and make it yours.', 'image/upload/v1626895472/iluuhujejqurfivtx4xt.png', 412, 10, 900.00, 0.00, '2021-07-21 19:24:32.97614+00', '2021-07-21 19:24:32.976189+00', 'phone'),
('open', 'PS4', 'Get in control with the latest in Game Tech, play it your way .', 'image/upload/v1626895552/k8ipjw0bn5uwmx4rokph.png', 501, 10, 500.00, 0.00, '2021-07-21 19:25:53.473727+00', '2021-07-21 19:25:53.473771+00', 'play_station'),
('open', 'PS5', 'Get in control with the latest in Game Tech, play it your way .', 'image/upload/v1626895580/woksccqiiodoxmqvfm8h.png', 502, 10, 800.00, 0.00, '2021-07-21 19:26:21.543111+00', '2021-07-21 19:26:21.543156+00', 'play_station'),
('open', 'ICharge Duo', 'Get in control with the latest in Game Tech, play it your way .', 'image/upload/v1626895659/mrosv4ar8c1z7n84k9if.png', 308, 10, 300.00, 0.00, '2021-07-21 19:27:40.359933+00', '2021-07-21 19:34:17.559876+00', 'watch'),
('open', 'iPods Pro', 'Listen to the music the way it was meant to be heard, free.', 'image/upload/v1626895737/hag5t23szj0uogr2r47j.png', 601, 10, 300.00, 0.00, '2021-07-21 19:28:58.976832+00', '2021-07-21 19:28:58.976878+00', 'pods'),
('open', 'Mi Buds', 'Listen to the music the way it was meant to be heard, free.', 'image/upload/v1626895776/hniylf8ivmq3gthmbbt1.png', 602, 10, 150.00, 0.00, '2021-07-21 19:29:37.02305+00', '2021-07-21 19:29:37.023102+00', 'pods'),
('open', 'RealME Buds', 'Listen to the music the way it was meant to be heard, free.', 'image/upload/v1626895827/la29b0q8yhneljsamhwo.png', 603, 10, 200.00, 0.00, '2021-07-21 19:30:27.984266+00', '2021-07-21 19:30:27.984311+00', 'pods'),
('open', 'Skullcandy Bud', 'Listen to the music the way it was meant to be heard, free.', 'image/upload/v1626895865/f8tmpqyozntqng0uzt9d.png', 604, 10, 300.00, 0.00, '2021-07-21 19:31:06.14338+00', '2021-07-21 19:31:06.143431+00', 'pods');
