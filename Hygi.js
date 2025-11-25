// Product Data
const products = {
    briefs: [
        {
            id: 1,
            name: "Premium Cotton Boxers",
            price: 150.00,
            Quantity: "3 per orders",
            image: "data:image/jpeg;base64,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",
            description: "Luxurious cotton boxers for ultimate comfort",
            
            materials: "95% Premium Cotton, 5% Elastane",
            sizes: ["S", "M", "L", "XL"],
            colors: ["White", "Black", "Navy Blue", "Gray"],
            features: ["Breathable fabric", "Comfortable fit", "Long-lasting", "Easy care"]
        },
        {
            id: 2,
            name: "Silk Blend Briefs",
            price: 220.00,
            Quantity: "2 per orders",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGn3o-IfLeZflQYzGrcEsuX1DCk8GqibfDGw&s",
            description: "Elegant silk blend for special occasions",
            materials: "70% Silk, 25% Cotton, 5% Elastane",
            sizes: ["S", "M", "L", "XL"],
            colors: ["Champagne", "Black", "Burgundy"],
            features: ["Silky smooth", "Temperature regulating", "Anti-bacterial", "Premium quality"]
        },
        {
            id: 3,
            name: "Sport Performance Briefs",
            price: 250.00,
            Quantity: "3 per orders",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-rmBIcm9yVCCq3yRzDtYGUOw9UAKcdavGSQ&s",
            description: "Advanced moisture-wicking technology",
            materials: "88% Polyester, 12% Spandex",
            sizes: ["S", "M", "L", "XL", "XXL"],
            colors: ["Black", "Navy", "Gray", "White"],
            features: ["Moisture-wicking", "Quick-dry", "Odor-resistant", "4-way stretch"]
        },
        {
            id: 4,
            name: "Bamboo Fiber Briefs",
            price: 350.00,
            Quantity: "5 per orders",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGJf-BDSH9YcHfP7YgKV6yzLBdEnmT_2G2Qg&s",
            description: "Eco-friendly bamboo fiber comfort",
            materials: "95% Bamboo Fiber, 5% Elastane",
            sizes: ["S", "M", "L", "XL"],
            colors: ["Natural", "Light Blue", "Sage Green"],
            features: ["Eco-friendly", "Ultra-soft", "Anti-microbial", "Sustainable"]
        },
        {
            id: 5,
            name: "Model Briefs",
            price: 250.00,
            Quantity: "2 per orders",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcEy2oB9pGVuLax3OoDLKQGz3WW8Cv4lKeWg&s",
            description: "Premium modal fabric for everyday luxury",
            materials: "92% Modal, 8% Elastane",
            sizes: ["S", "M", "L", "XL"],
            colors: ["Pearl White", "Midnight Blue", "Charcoal"],
            features: ["Ultra-soft modal", "Shape retention", "Color fast", "Premium finish"]
        }
    ],
    deodorants: [
        {
            id: 6,
            name: "Ocean Breeze Deodorant",
            price: 380.00,
            image: "https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=400&h=400&fit=crop",
            description: "Fresh ocean scent with 48-hour protection",
            materials: "Aluminum-free, Alcohol-free",
            sizes: ["50ml", "100ml"],
            colors: ["Blue"],
            features: ["48-hour protection", "Ocean fragrance", "No white marks", "Skin-friendly"]
        },
        {
            id: 7,
            name: "Woods & Spice Deodorant",
            price: 420.00,
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzPEQllMbsNF4TGrb375P6_MqBeryW6XAKfg&s",
            description: "Masculine wood and spice blend",
            materials: "Natural extracts, Essential oils",
            sizes: ["50ml", "100ml"],
            colors: ["Amber"],
            features: ["Woody scent", "Long-lasting", "Natural ingredients", "Premium fragrance"]
        },
        {
            id: 8,
            name: "Active Sport Deodorant",
            price: 350.00,
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4eG2zfozuhtdTs3DZn-MGvUlnKy5MzXM7eA&s",
            description: "Maximum protection for active lifestyle",
            materials: "Anti-bacterial formula",
            sizes: ["50ml", "100ml", "200ml"],
            colors: ["Green"],
            features: ["Sport strength", "Anti-bacterial", "Quick-dry", "Motion activated"]
        },
        {
            id: 9,
            name: "Sensitive Skin Deodorant",
            price: 480.00,
            Quantity:"2 per order",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZtIOK6mJmQ4pEQWHKHogaz8td0frkpbHXbA&s",
            description: "Gentle formula for sensitive skin",
            materials: "Hypoallergenic, Fragrance-free option",
            sizes: ["50ml"],
            colors: ["White"],
            features: ["Hypoallergenic", "Dermatologist tested", "No irritation", "Gentle protection"]
        },
        {
            id: 10,
            name: "Luxury Collection Deodorant",
            price: 650.00,
            Quantity: "3 packs per order",
            image: "https://bellavitaluxury.co.in/cdn/shop/files/deopackof3-01.jpg?v=1712325658",
            description: "Premium fragrance with silver ions",
            materials: "Silver ion technology, Premium oils",
            sizes: ["75ml"],
            colors: ["Silver"],
            features: ["Silver ion protection", "Premium scent", "Luxury packaging", "All-day freshness"]
        }
    ],
    mouthspray: [
        {
            id: 11,
            name: "Ice Cool Mouth Spray",
            price: 280.00,
            image: "data:image/jpeg;base64,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",
            description: "Instant fresh breath with cooling sensation",
            materials: "Natural mint extracts, Xylitol",
            sizes: ["15ml", "30ml"],
            colors: ["Clear"],
            features: ["Instant fresh", "Cooling effect", "Sugar-free", "Compact size"]
        },
        {
            id: 12,
            name: "Herbal Fresh Mouth Spray",
            price: 320.00,
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsAU9OVbuB7Gequjr8h7TLh6EzkvTu78twvA&s",
            description: "Natural herbs for long-lasting freshness",
            materials: "Herbal extracts, Essential oils",
            sizes: ["15ml", "30ml"],
            colors: ["Green"],
            features: ["Natural herbs", "Long-lasting", "Antibacterial", "Alcohol-free"]
        },
        {
            id: 13,
            name: "Whitening Mouth Spray",
            price: 450.00,
            image: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxASEhUQEBIWFRIWEhUWFRUVFRYVFRUSFRUWFhYVFRUYHSggGBolGxUVITEiJSkrLi4uFx8zODMtNygtLisBCgoKDg0OGhAQGyslICUtLy0tLS0tLS0tLS0tLS0tKy0tLS0tLS0tLS0tLS0tLi0tLS0tLS0tLS8tLS0tLS0tLf/AABEIAOEA4QMBEQACEQEDEQH/xAAcAAABBQEBAQAAAAAAAAAAAAAAAgMEBgcFAQj/xABKEAACAQIDAgoGBgcGBQUAAAABAgADEQQSITFBBQYHEyIyUWFxwXOBkaGxshQzNFJy0SRCg5LC4fAVIzVTYvEWgqKz4kNjhJPS/8QAGgEBAAMBAQEAAAAAAAAAAAAAAAECAwUEBv/EADgRAAIBAwIDBAgGAgEFAAAAAAABAgMRMQQhBRJBUWFxgRMiMjORobHRQlJyweHwFDTxBhUjgsL/2gAMAwEAAhEDEQA/ANxgBACAEAIA1icQlNDUqOqIouzMQqgdpJ0EA4uF40LWU1MNh61ekGK84hoIGI22WtVRrd9vCHdEXH14cqb8FiV8fo5+WsZAv3Cv7dX9ahiB+xZvkvJFw/4ho70xA/8Ah4o/CmZFyOdI9XjDh9/Oj8WHxCfNTEXHMj3/AIhwe+ui/iuvzARdDmQgcaeDtn03DX7OfpX9maLk8yJNLhnCt1cRRbwqofgYuhdEqlXRuqwbwIPwkkjkAS7gC5IA7TpAIVbhnDrtqA/hu/y3k2ZFyI3GahuSs34aL/lJ5WLoT/xNT/ycR/8AS0crFxScZqO+nXXxo1PIRysXRLo8M4dtlQD8QKfMBIsxcmo4IuCCO0G8gkVACAEAIAQAgBACAEAIBxeN/D30HDmvkztmCKt8ozNfUmx00MlK5DdjE+HuMGKxjZsRUuAbrTXo00/Cvb3m575qopGbdzTuS/7CPSv8ZSeS0cFslSwQAgBAC8AD3wBl8NTbrIp8VB8oAvAYSkjE06aISNSqqpPjYayAPYysVsBvvr3D/eSgyCyAm51Pfr8YB7lgWPCIFgtBFj20CwFJIsNhLG66Hu0gHTwlQsuu0G0qyUPwSEAIAQAgBACAEAIBSeV0gYEEmwFdNf8AleWhkrLBiD48ZgqAsbgE9l99ppcpY23kv+wj0r/GUnktHBbJUsQKWOd7NTpAoT0WaoFLC9swWx6J3ay3Klk88a0pbxjt428xS45mvzdFmUMVzZkUMVNiVBNyLgi+l7aaaxy9rJVZyvyxbXbsvqLwmOWpnyg9AkG9tzMulj/oMhxsWp1lO9un8/YZHC9MjMq1CoVWZlW4QMocBtbk5SCQt7Xk8pT/ACYtXSbXXbG19/4uOvwglyqhnIAvkUsBmFxc7LkEG22xHaJHKyzrxvZXfgrklGuAdRcXsdD6xuMg2TurjtDb6oA3j+sng3lCDI4gHj7D4GAN0BpJIRIpOpuAwJG0Ag28ZBIOIASQNGQQTeD+qfHyEMlEqQSEAIAQAgBACAEAIBSOWC30DpbOeS/hle8tHJWWDFcLWQkqi2AF72tfW00RRm1cl/2Eelf4ykslo4LZKljktwSdADSZFPQFWhzjIt75VcONBu0075fmPI9M9knGyxeN2u5O68tgrcEX0tRdAWKCtSzsmY5mUNm2X2ae2OciWlu/wtdLq9r99z2jwMnT5yz5mYrpbLmZ2/iHshzLQ0sVfm3v92/3DD4GvSTm6bIQVW5YNdHCKjFQOuDlvY21J17DaeSIUatOPLFrz6O1vPw28RtuC3Qc3TGan0SL16tB1KotPrUwc4IUHW1j26Wc3Uq9PKK5Y7r9Ti1tbKydWitlUHaAB1i277x1bxOplGeyKskv5+Y/Q2+qCRrH9ZPBvKEGR4B5U2HwMAjkdD2Xtty3Ga1tereSyEO1FvbKVNnQpl2hOjmvr2Z9ltCBtkEkipAPJIG2kAmYDqnx8hDCJUgkIAQAgBACAEAIAQCkcsFv7P6XV55L+GV7y0clZYMWwlYNoq2UD+tk0RmzaeS/7CPSv8ZSWS8cFixmMFMgEE3E5eu4jHSNRlFu5YjjhZd6n2gzxR4/Tb9aD+Kf2BMw+KR+qdd43j1TrabV0tQr035dSE0x6ekk8DDZfUbe6QpJuyYPZIPIA5Q2+qANY/rL4N5QgxiAeVNh8DAG6A0hkIlIIJPKkATJA20gE3AdU+PkIYRJkEhACAEAIAQAgBACAUnleIGAudgrIT4WaWjkrLBin0hj9Wn5bj5+6aXKWNq5L/sP7V/jKTyWjgsHCtHMlxtXX1b/AOu6cbjWmdXT86zHfy6/fyLFer1gNs+UhBsxq1VFHDxfDZpMHQ2IP9AzraWnKDUo5OLW1klK8S1pxkR8MK1IZqjI2VNNHXQg37zO3X4hGnTT6u9u7xOotUp0ueOWnZd6ONxY4cLVBmvd2ytm25iba/8AN+U5Omqyo6lNu/Ns++/X4nl0mrblaXUt2I4Qoocr1FB7L3PsGs79XVUaXtySOnKrCLs2h6lUDAMuw7JpSqxqwU44ZdO49Q2+qaEjWO6y+DeUIhjEAGGkAbQWggdWqe6CRRa8ACIA20AmYDqnx8hDCJMgkIAQAgBACAEAIAQClcrjWwF+ysh9zS0MlZYMZoVSxN1IG6++amZpnErhKpSwgVLWzMdRfXMR5CeLVVZQaseWvXnTdonXbjDX/wBH7p/OedambVnY8j19Vdnw/kr/AA1jWCZrab7bB/Kcj/DUJ3WP7seavqZTiUfhDHN29G/s7+8T2wgjzQhzPvJGA4UakKdj0bsSb7SdPJZjVoKpe5e0lgf4T4ZN81I2ZgCzDcbkadhNgbytHTpL1uhN7vm6nX4t4tyqo+XRy97dO5Fuk2/w/oeXV2Ssl5l6M7NR7799/EtC8cGp/wB2tJWC3AOYi+u3ZPp9Dp3DTwi82+u5pPjbhJxjC6XW51+K/GVsTWNI0glqZa4YnYyi1rD709E6fKrnr0HE3qajg422vnwO/jusvg3lM0dZjEADAGzBB6sBDiiCRbCAMmATMD1T4+QhhEmQSEAIAQAgBACAEAIBS+VskYC4FyKyadujS0MlZYMVpVahIull363NvdNNzM0TisP0VfFvmac3X+1E8Gr9ry+5PcTxxZz5IYdb6GbIxexwsVxcosSwOQak2W58FGyZ1lKEOaKv3ExkntLYq9TDpmYU2JprY2I6dywBKC2vaRpa19xiDlKN2tzVPmV+z5/yS04JqVSzoyuoewI6IAubEiwF7dmktCPN6qavbBlUqKKwywcHUTSXU3ft3Dw7T3/7zejw6POp1N7dPueOWosvVyesJ2Ezxlj5O/tTegb56crW9k6/A/8AYf6X9UXzHdZfBvKedH1TGRAEPAEwQerARJpwSKaARmgEvA9U+PkJDCJMEhACAEAIAQAgBACAUvlaJ+gG23nUt42aWhkrLBjGHNQnpgAW9d9Pdtmpnsa/ybYWm+Cu6BjzjjUX0v8AzmNWEZP1lcejjLdos54Mof5S+yZ+hp/lRHoKX5UeHgnD/wCUvsj0UOwj/Fo/lQk8DYf/ACl98tyR7Cv+HQ/KhP8AYeG/yV9/5woRWEQ9Dp3+BCBxfwg0FFQL3sMw17dDIjCMXdJXIeg07VnD6nh4u4T/ACR+8/5zS7Kf9t0v5Pm/uNnizg/8kfv1P/1J52VfC9I/wfN/clcE8CYeg+elTysVK3zOdCQbWYnsESm2tzWhoaFCXNTjZ4y39WTMd1l8G8pVHrYyIAl4AiCD1YCJNOCRTQCM0AmYHqnx8hICJEEhACAEAIAQAgBACAUzlav9ANtvOpbx6UtHJWWDFaFOrcFiLbxfu8O2abmexs/Jf9i/av5Sk8l4HHwr0RTxNSph0c0qgsWLXY1KrCxsdwE9jTvFJ5Pl6cqSp1ZSpp8rzvvd/sNNxec0TiLlSaZrKioxQITonOX61joO6T6Zc3L5Gb4fJ0nVvZtcySTtbsv29w7V4rsmTPVYE1adN/7tgoNQG3NsT07EWPjIVZO9kXlwyUOXmm8pPZ9ex9STT4Pw5OKVXypzlKkjFGY03LsGVLm5PRAzXG2Vc5eq7G0dPRbqxjKyvFJ2vZ33S+51+JdE0xiKZbMUxBW/blFr90yru9n3Hv4TBwjUg3e0rfAskwOsEAXR2+qANY7rL4N5QgxkQBLwBEEHqwESacFhRggjNAJmB6p8fISAiRBIQAgBACAEAIAQAgFO5Vx+gH0tPzloZKzwYlzVX74/r1TTczNn5LL/AEEX1POtc9+kpLJeGBVTipVNOpSFZAtSrzhORs2l7L1rW1m6rq6dsHGlwqbhKmpq0nfH8ntfi+7qtE1KfO06aAVObfPzanofr5b6W2TKOqh6RwV75t4l58OnOKg5K6S3s72WOthzE8DO1UVs9JKlN1d25uoA7nZe72t3DeZC1MFzRd9u3G/fbctU0M5VFUvFNO72e7+P0HDxeq36L0lH0la+UI9s6iwB6ey9z4maelXZ0sS+H1L7NL1lLDyvMn8B8FtQ5zO4dqlU1CQCoBO0akylSfNa3Q9Oj0sqClzO7k7nRpVAwuL212gg6G2wzGE1NXX2PWncVLEi6O31QSNY7rL4N5QiGMiAJeAIgg9WAiTTgsLMEEV4BMwPVPj5CGSSJACAEAIAQAgBACAEApvKwL4BgDY87T17NustHJWWDHpqZGu8l/2L9q/lM55NI4OjU55SSA5FNntoTnFQta33svR8JxG60G2uZ8jfbvzXt4228DF8y7dv3DE4Rhm65K4ZApBbVwW3jrHu75FahNc9r3VNWavvJX+LDg9/AXjaTsKtwx+pIHS1t1rDfv0mmopznGpdN+w1nzsTNN38grIxqC2cLanzZy1Gt23sdD25hsipGbqq10vV5XaT8b77Pt5lgNPm28s/34i0ovnD2e/0lh+tbmiG3bMt7ayypzVRT39t9vs2fla5Ki737/kIp4d2CBg9sle/WGucZb+UpGlUlyKV7WnfObq1/wBiFFuyfeMVieiKhYWo0ixIclCCS98uwkCxvaYzcrR9K37Mbvfbtx29b2KvpfsRYaG31TuHpG8b1l8G8pKDI5a3jJA2FcnUrbsym/tzeUggTVSp+qV9YI94gWIlN8bmsaNDJ94V6mb93mfOCTq0c1ulb1XPvMAWxbut4G/tvAGHgEzA9U+PkIYRIkEhACAEAIAQAgBACAU7lWH6AfS0/iZaOSssGJrhm3VD/t65oZ3Nn5MPsX7V/KUnkvHA9iaeNLOUD252q6a71SqlNbbkulNrHQmoOyarktucmotU5NxTtdtfCSXlsn5nqpWTpU0rlLtkVixc1OZyhnDG6qWY7dAVvvjZ5t/WWUasd4qVt7Jt3vy23u9k3fPZcdfg2qGOQuGz0FDM1RlsgD1HK5hcEgKdm/tMjnXXvLPT1E3y3veKvdtbbt2vh4BqNfLh7q7NnZ6i6hOnUzG5D3UqCco1G6LxuyXCty07pt3ba6bu/btbpldCI/BeK5tNSWZczqC/RYJY/r/WXqMdLD+7EtzxuYPS1/RrN2rvO23jnfw2RI+iYpmdjmUu1EoQ9yqh3RiQbBWFJgSBcEi/dI5oWS8f78TT0WocpPdXcbb43afnyvfO++TtnB09OgDYAa9g2A9vrnjnRpzlzSV2dTkja1iXR2+qaFyBwtiVWpTBvfK/vK/lLLBVvcaV2LaKbWGtxt10teASAT2H3SAeF+4+ySSeq/cfZIA6rdx9kAX6jAImJz30pse8FPNhAJnB5OU3FjfZp2DshhEqQSEAIAQAgBACAEAIBTeVhQeD2B2GpTv4XMtHJWWDGKVIA5gdLW7pqZs2Lkv+xftX8pnPJeOC1dLulSx4WYbbQDznDfavv2QBJqN2iAeioe0Xv2GALs3aIB6gO8wB2jt9Ugk5PD9O9RD2KfjLLBSWRzC7IJJgkASwgkFEAeUQBcARVgBgt/jDCJMgkIAQAgBACAEAIAQCncq1voDX2c7Tv7TLRyVlgxJcOh1RreB/rtmljM2LkqBGDKk3tUPvJ/ISki0Huy5SpcCIB4QOyAAUdkALCAewBFWqqgsxsBtJkpXKykormlg4vA/Cr1sYQLiktJ8q9pzJ0m7/AITWcFGHecvTaudfVNYik7LzW7FcZuFKFKqiVaqIxQkByFuL20J0mSOjUqRi/WdiRgcRTZQyupB2EMCD4EQWU4tXudBZBa54wgkFEAeQQBcAj4iqo2sB4kCLFXOKy0J4KxVOpn5t1bKRfKQ1iRsNoaIp1ITvytPwJ8g0CAEAIAQAgBACAEAp3KuR/Z7X2c5Tv4XMtHJWWDEhRpt1TY9x19hmhmbHyWD9EPpD5yky0MsuMqXCAJgADBB7BI3VqhfykpEOSRyccGqdbZuG7/eXjseKtCVTIji7hstcm3/psP8AqX8pNR3iY6OjyVm+77ETj1wBQxVSmaobMEIVlaxAv2bD6xM0eyvRjU9orVPi1icNc0SK1I9ZCL3H+qnv8V18JpFrqcTUaLUUbyp+tHqv4+254mDSr9R0Km+ix1J382x2/hOvjNuZrJyP8eFd/wDh2l+R/wDy+vg9/E5lWpUUkEsCNCCSCD4Q0jzc9SLs20z2liH++37xkpIrKtU/M/iTKdd/vN7TNkkeeVap+Z/EcLk7ST4mXSRi5yeWRcTslJmlMtvJd1K/pF+WeCrk+04F7qXiXiZncCAEAIAQAgBACAEAp3KsbcHseypT+MtDJWWDFOYRgGAtfUW0/rZNDM1/kq6OCIJv/eNqZSRaJcDUHbKlxBqiRcWFjZJAkEnaIIG3RzoGAHtP8pKKtSeGeJhwN5PbffFyFCwp6ItFyziNcH/W6bMh+KyXgyh7Yxxg+sT8PnIWDSWT3CbILDPCvAdGuLkZam512+v70tGbieDWcOo6nd7S7Vn+Sp8K4ZlIpYwd1PEqL6bhU+8PHUd81XbE4mopOD9Hq/8A1qL9+36rvONXwj0myvbUXVgbqynYyneJpF3OPqaE6LtLyfRrtQ7SmyPFIflzIjYrZM5m1MtvJd1K/pF+WeGrk+04F7qXiXiZncCAEAIAQAgBACAEAp/Ksf0BvS0/jLRyVlgxWjiFbTYewzW5mazyan9EPpGmci0Tu18T0rD+W0TxTq3lZHojHYdVzpbtF5omxbY6SzcxQzeQB1ZYHsARU2QGROC6t6xG/I3xWWktjzU53q27hHGD6xPw+cqsG8snuE2QWJokEkfF4ZKilKihlO4/Ed8spNO6M6tKFWDhNXRT8bwaaF6VS74YklSNWpH7y+Y3++eiPretHPYfNanTPTr0VTem8PrHvX7o5VfDGm2U2ItdWGxlOxh3TeDuj57U0HRnyvxT6NdGgmh5CNitkzmbUy3cl3Ur+kX5Z4amT7XgfupeJeJmdsIAQAgBACAEAIAQCncrBP8AZ7W1PO07DtNzLRyVlgw6rjaajNU6JHdqT2Dt2S7klkzLfxE4drPhnysUUVSAF22yg6ttvrM1LmucTiWpq05csJWVi/v1xY/znKt6x9TH2Tp0D/XbPbBlWjqJPQYDL7ZBA4skCoJGcW+VGPYpPsElZKVJcsW+44vFnFipiNesKTesZksfEbPZNakbROVoayqVt82+xO4wfWJ+HzmSwdWWRuliQthZiSL2VWawG82Gm2CHNR238lcknH0xe7Gw2tlbLe9tHtlOumhizK/5FNXu8dbO3xtYVXxCL1mAtbabdYkD2kH2SC8qkI5f9Y1iKtFkGd1yt1TmGtt6nfaWi3F3RlVlRnC02rPH8Fcx3B1hk0KnpUzuBbs/0NvG42Oy89kZJ+svM+Z1mitH0fTMX2N/tLr2Ozxc4ZG6bo+ZaadmRcVsmczWmW7kt+rr+kX5Z4amT7XgfupeJeJmdsIAQAgBACAEAIAQCjcsuJ5vgx3te1WkAO8tYeqSnbcrLB83YrFNVa77dw3AdglG23cxZoXJv9mqD/3f4RJh1Pn+K+9XgaVRrZkpv3AHxXQ/Cc+suWofTcPq+l00JdbW81sd7Caju8566e6N2dGkdJujJ5E1xvkFWCGSBwQScbjViubw7drEIPXqfcDNKavI5/E63o9O+/b7/I4XEOpfFH0L/PTmtb2TkcHd9S/0v6osnGH6xPw+c86wfSSycnhHEIhTNfUNrkDqcozajMCCLGxHaYM6lLnx81f7CcXi8PkdWrqiqVQ5xUBQ5rqGGbKeqQGtrJTMamllKLjfbpnt8bfIeqV6Iqc7TqhiAtgxqOL/AN4LZrHJfnAB3gi0i5b/AB2qnPF9mW32/DJ5TxVMFnWvRLNfOOcKBbMW6DAE7+lprt02RcehqJuStd53a632dn57bnaq4YVaS/eygjUnaNhJAJB7xL058rLVqHpafK8/EpHC+HKVDpodfXsN+/8AOe+D2Pg+JUXTrX7f6zkYrZKzPLTyW7kt+rr+kX5Z4amT7XgfuZeJeJmdsIAQAgBACAEAIAQDPeXX/CX9NR+eQyssHzivfKmDNI5N/s9T0v8ADJh1OBxT3q8C/wDA73R1+6wPqYf+M82qjhnU4DVvCdPsd/j/AMFn4N1HdL0cHZkT6R3T0IykLrHo37JJV4GaVQHZBA+DBJTOP2I1pU+5mPuA/im9Hqz57jlTeEPF/t9yPydn9LPoH+anJreyYcF/2H+l/VFr4w/WJ+HzmCwfTSyRcRhmq0mppU5tiBZ8obLYg9U6G4BHrglDL8EYgqymrTYFT1qaEM2wZwVNxv8A+a2wC4kaxXBWJPVNAdBbnJa9RA1rAC4F8mt+jl3yCQ4L4EfNfEUsPkINwialstNQbm20iqTp+so3G4Flw1JUUIosqgAAbgNAIByeMXBwcX7Tt7GtofD8p6aNSyscTi2ijWjf+3M/xYtcHbN5YPjIJp2ZbeS36uv6VflniqZPtOB+5l4l4mZ2wgBACAEAIAQAgBAM+5df8Jf01H5xIZEsHzfmttlTC3YaRyb/AGep6UfLJicDinvV4F74C67L2p7wR+ZmddXgb8EnavKPavoy2cGbJWjg+knkRwrjuZXOdxGnbfd8fZNJNrBhXrRo03KX9ZPwNYOl9oI9t5dO6KUpKUTl4B2V3pONUawO5kOqsPUde8GSZ0pO7jLKf/DOyp0knoM947Vb4kj7tNR7bt/FPRS9k+U4xK+pt2Jfcf5OvtZ9A/zU5FX2S/BP9h/pf1RbOMP1ifh85isH00snuEhkomiQSJaCT1YA+kAK9LMpXtHv3S0XZ3M6sOeLiZlxjpZard/S9Z63/UGns6Hwetp8moffv9/ncsPJb9XX9KvyzyVMn03A/cy8S8TM7YQAgBACAEAIAQAgGfcuv+Ev6ah/3BDIlg+br22+2VMMmk8mo/R6npB8shHB4p71eBc+CauWsnecv7wIHvIie8WjHh1T0epg++3xLrwaDbXbM6S23PsJlZ4+4rK1Kn3M59oUfxe2XkfP8ZqtOEPFkviFiiyMpbQHQHaB+UrF2ZpwmpzQabwWCti6RYLmUv8Advrbtt7Js07XOiq1Nz5E1fsJCnSSamYcO18+Iqvu5wgeC9Ee4T0x2SPitbP0monLv+mx1+Tn7WfQP81OVq+ye3gv+w/0v6otnGH6xPw+cxWD6aWSJiUvTv2a+rfOLx7TurpuZfhd/Lr9y0XY4dbjJ9GYEm636S93d3zjcMrVqMtm+Xqunl2M8dfVqnI6mO4zU1emKfSpuMxcaqbgEKDuNiD/ALGdbWcVcJpUt+V+t3rsX37S89VFNWwdlMZSzZA65vuggn2bp1Hq6KkouSu8LxPRzxva5NWegsOySDPuPdLLV8Vv79ntv7Z6qbvA+O43T5dSu9XOjyWfV1/Sr8s89TJ2eCe5l4l4mZ2ggBACAEAIAQAgBAM+5df8Jqemof8AcEhkSwfN17bdkgxNI5Nz+j1fSD5ZU4HE/erwLG9QggjaCCPEaiQc1Nxd1lGj8G1ldFqLsZQw9e71bJaKPtqdVVYKa6oqXKNhm5ylUGwoy+tWv/H7omcHjMHzwl3W/vxK3wdiKlFw630Ozt8ZEZpHJpynTkpRLdxdxT4nEvXdQMtMKAO1j/4n2y6nc7OglKvqJVZdFb4/8Hf4ax4o0Wf9a1l73Oz8/VLLJ0dXX9DRc+vTxMzYT0XPi7Fk5OvtZ9A/zU5Wrg6/Bf8AYf6X9UWvjF9Yn4fMzJYPpZZPcJskNXVmSZvx84rYpXNWiM9Em+h6SX3MN6984tXTR0ycvw/T+9Dl19NKMnLKKkvCFZUZQDbojf0GAtcHYOode/Sef0EHLmMOXqX/AJM8LWZVds3NLcqWvYk6kJfv2nuk6fSSq6mM7WjHfz6Hq0cZOV+iNJSfQnTHZJDKbyiUujSfvZT67EfAzai9mj5z/qCn7ufihXJZ9XX9KvyzKpk9fBPcy8S8Sh2ggBACAEAIAQAgBAM+5df8Jqemof8AcEEPB83bPCVMcmk8ma3w9X0o+WUkcPiMb1V4FqekOwzJyPEqaJ/BPDr4foc2z073sNqnflvp6pMaljoaTVuguW14i+HuHfpIRUw9QBSSTUyA3tYWyse+TUnzYNNXqY10oqL27TkGlXI6NAeuYXZ5VSb6E/grHYyhmy0KZDW6zlbEX7FPbsmlOco9D1aepKhfbIjGY3EVWzV2Sw2KvVHh+culUk7nn1Go53ebXgc7EMp2T2QUlk5dWUW9ju8nX2s+gf5qctUwdDg3+w/0v6otvGFemh/0+ZmawfSyyJwZgIabD4ko61DRqBrgKyEKUI2ML698q0mrMNJqzOPS4FekVelg8OHQ9AU6joCLsekd/WNgQbEntvM3Rhttgr6KCttg7T4jFCwWirdAknnAoDhSVUXubFrC+7b4amh0OD6lRkBqpkf9ZQwcA9zDaPZAJYkkMrPH2kWoLlBJ50WAFybq+6aU3ucbjkHKhGy35l9GHJvgKtKlV51CuaoCoOhtltcjd65SbuzbhFGdKi1NWuy3yh1QgBACAEAIAQAgBAKBy5UyeCatgTarRJsL2UVBcnsEMh4PmvZ4Shjk0vkxa2Hq+lHyykjicRdqq8C3GuZWx4fSsScU3bLKKIdaQg4pu2X5UUdaXaAeq2zMfAE/CWUUOepLFxDU6li2VrC1zY2F9lz3y6SKNVLXaYk4KsbdBukQF02ltlpdMj0FV22e/wC5HxOHdCA4sSAwBtsO/wB0smZzpyg7SViwcnX2s+gf5qcrPB1ODf7D/S/qi5cOddfw+coj6WQjDQSTAJBIlhABFgD6LAHQIA1VgI94P/W8fKGES5BIQAgBACAEAIAQAgCKtJWUo6hlYEMrAEFSLEEHaCIB89cqfJq2BLYvBqWwZN2Xa2HJPvpdh3bD2yrRnKPVCOTT7PV9IPlmcjgcS94vAtTSpzmdE8J0xYpSCkFDpbXKzEjZvBA9U0Uj1PUwXsxtj5fcj0OESgAtcgEE5iASXz3KgbTsOuo0lkzGGocFj5997/s+1bHtThioWzWXw1sdKg1APZVPsEsmTLWVHK+39v8Af6EbEcIVHADEaBQNNyElfjLIxnqZytfpb5YGqnCdUgDPYLYiwUWI2bB/Wkuir1VR2XNjwG6lWrVtcs9tmhb3gSSHKrVzd+Vyycn+Dqriiz03VeZYXZGUXzJpcjbKzex1OEUaka7cotKzyn2ounDGFZlDKLld28g9koj6KSIGEqCSCcDIJPCYB6sAeQwB0GAM1mgD2DpkLrtJvDCH5BIQAgBACAEAIAQAgBAE1KYYFWAKkEEEXBB0IIO0QCj4Hk2o0Hq/R6pp0ajhxTKZubNtVVsw6PZfZs1lJQuc/VaBV5qXNbyJ6cSKf61Zz4Ko+N5Ho0YrhFPrJ/IeTiVhhtaofFlHwWTyIuuE0Fm78/4H04oYIbUY+NR/IiWSRdcL0y/D839yQnFrBD/0FPjmb4mSarQaZfgQ/T4Fwq7MPSH7Nfyg0jpaEcQXwRKp4amvVRR4KBBqoRWEOwWCAEAaq4ZG1ZQT27D7RrAGjgV3Fh67/GTciwg4A/f9385AsC4Jvvj93+cEji4Y/e9384AsUO8+6ALWko1tr7YAuAEAIAQAgBACAEAIAQAgBACAEAIAQAgBACAEAIAQAgBACAEAIAQAgBACAEAIAQAgH//Z",
            description: "Fresh breath with teeth whitening benefits",
            materials: "Hydrogen peroxide, Mint oil",
            sizes: ["20ml"],
            colors: ["Pearl White"],
            features: ["Whitening action", "Fresh breath", "Stain removal", "Professional formula"]
        },
        {
            id: 14,
            name: "Probiotic Mouth Spray",
            price: 550.00,
            image: "data:image/jpeg;base64,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",
            description: "Balances oral microbiome for healthy mouth",
            materials: "Probiotics, Natural enzymes",
            sizes: ["15ml"],
            colors: ["Clear"],
            features: ["Oral probiotics", "Microbiome balance", "Long-term health", "Natural protection"]
        },
        {
            id: 15,
            name: "Premium Silver Mouth Spray",
            price: 680.00,
            image: "data:image/jpeg;base64,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",
            description: "Colloidal silver for maximum oral hygiene",
            materials: "Colloidal silver, Essential oils",
            sizes: ["25ml"],
            colors: ["Silver"],
            features: ["Colloidal silver", "Premium formula", "Maximum protection", "Luxury packaging"]
        }
    ]
};

// Cart functionality
let cart = [];
let orders = [];
let selectedPaymentMethod = '';

// Initialize the store
document.addEventListener('DOMContentLoaded', function() {
    loadProducts();
    setupEventListeners();
    updateCartCount();
});

function loadProducts() {
    // Load Briefs
    const briefsContainer = document.getElementById('briefs-products');
    products.briefs.forEach(product => {
        briefsContainer.appendChild(createProductCard(product));
    });

    // Load Deodorants
    const deodorantsContainer = document.getElementById('deodorants-products');
    products.deodorants.forEach(product => {
        deodorantsContainer.appendChild(createProductCard(product));
    });

    // Load Mouth Spray
    const mouthsprayContainer = document.getElementById('mouthspray-products');
    products.mouthspray.forEach(product => {
        mouthsprayContainer.appendChild(createProductCard(product));
    });
}

function createProductCard(product) {
    const card = document.createElement('div');
    card.className = 'product-card';
    card.onclick = () => showProductDetails(product);

    card.innerHTML = `
        <img src="${product.image}" alt="${product.name}" class="product-image">
        <div class="product-info">
            <h3 class="product-name">${product.name}</h3>
            <p class="product-price">₱${product.price.toFixed(2)}</p>
            <p class="product-description">${product.description}</p>
            <div class="quantity-controls">
                <button class="quantity-btn" onclick="updateQuantity(event, ${product.id}, -1)">-</button>
                <span id="qty-${product.id}">1</span>
                <button class="quantity-btn" onclick="updateQuantity(event, ${product.id}, 1)">+</button>
            </div>
            <button class="add-to-cart-btn" onclick="addToCart(event, ${product.id})">
                Add to Cart
            </button>
        </div>
    `;

    return card;
}

function showProductDetails(product) {
    const modal = document.getElementById('productModal');
    const modalContent = document.getElementById('modalContent');
    
    modalContent.innerHTML = `
        <div style="display: flex; gap: 30px; flex-wrap: wrap;">
            <div style="flex: 1; min-width: 300px;">
                <img src="${product.image}" alt="${product.name}" style="width: 100%; border-radius: 15px;">
            </div>
            <div style="flex: 1; min-width: 300px;">
                <h2 style="color: #2a5298; margin-bottom: 20px;">${product.name}</h2>
                <p style="font-size: 2em; color: #667eea; font-weight: 700; margin-bottom: 20px;">₱${product.price.toFixed(2)}</p>
                <p style="margin-bottom: 20px; font-size: 1.1em;">${product.description}</p>
                
                <div style="margin-bottom: 20px;">
                    <h4 style="color: #2a5298; margin-bottom: 10px;">Materials:</h4>
                    <p>${product.materials}</p>
                </div>
                
                <div style="margin-bottom: 20px;">
                    <h4 style="color: #2a5298; margin-bottom: 10px;">Available Sizes:</h4>
                    <p>${product.sizes.join(', ')}</p>
                </div>
                
                <div style="margin-bottom: 20px;">
                    <h4 style="color: #2a5298; margin-bottom: 10px;">Colors:</h4>
                    <p>${product.colors.join(', ')}</p>
                </div>
                
                <div style="margin-bottom: 20px;">
                    <h4 style="color: #2a5298; margin-bottom: 10px;">Features:</h4>
                    <ul style="padding-left: 20px;">
                        ${product.features.map(feature => `<li>${feature}</li>`).join('')}
                    </ul>
                </div>
                
                <div style="margin-top: 30px;">
                    <div class="quantity-controls">
                        <button class="quantity-btn" onclick="updateQuantity(event, ${product.id}, -1)">-</button>
                        <span id="modal-qty-${product.id}">1</span>
                        <button class="quantity-btn" onclick="updateQuantity(event, ${product.id}, 1)">+</button>
                    </div>
                    <button class="add-to-cart-btn" style="margin-top: 15px;" onclick="addToCart(event, ${product.id})">
                        Add to Cart
                    </button>
                </div>
            </div>
        </div>
    `;
    
    modal.style.display = 'block';
}

function updateQuantity(event, productId, change) {
    event.stopPropagation();
    const qtyElement = document.getElementById(`qty-${productId}`) || document.getElementById(`modal-qty-${productId}`);
    if (qtyElement) {
        let currentQty = parseInt(qtyElement.textContent);
        let newQty = currentQty + change;
        if (newQty < 1) newQty = 1;
        qtyElement.textContent = newQty;
    }
}

function addToCart(event, productId) {
    event.stopPropagation();
    
    let product = null;
    let category = '';
    
    // Find the product
    for (let cat in products) {
        const found = products[cat].find(p => p.id === productId);
        if (found) {
            product = found;
            category = cat;
            break;
        }
    }
    
    if (!product) return;
    
    const qtyElement = document.getElementById(`qty-${productId}`) || document.getElementById(`modal-qty-${productId}`);
    const quantity = qtyElement ? parseInt(qtyElement.textContent) : 1;
    
    // Check if product already in cart
    const existingItem = cart.find(item => item.id === productId);
    
    if (existingItem) {
        existingItem.quantity += quantity;
    } else {
        cart.push({
            ...product,
            quantity: quantity
        });
    }
    
    updateCart();
    showNotification('Product added to cart!');
}

function updateCart() {
    updateCartCount();
    updateCartDisplay();
}

function updateCartCount() {
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    document.querySelector('.cart-count').textContent = totalItems;
}

function updateCartDisplay() {
    const cartItems = document.getElementById('cartItems');
    const cartTotal = document.getElementById('cartTotal');
    
    if (cart.length === 0) {
        cartItems.innerHTML = '<p style="text-align: center; color: #999; padding: 20px;">Your cart is empty</p>';
        cartTotal.textContent = '0.00';
        return;
    }
    
    cartItems.innerHTML = '';
    let total = 0;
    
    cart.forEach((item, index) => {
        const itemTotal = item.price * item.quantity;
        total += itemTotal;
        
        const cartItem = document.createElement('div');
        cartItem.className = 'cart-item';
        cartItem.innerHTML = `
            <img src="${item.image}" alt="${item.name}">
            <div class="cart-item-info">
                <div class="cart-item-name">${item.name}</div>
                <div>₱${item.price.toFixed(2)} x ${item.quantity}</div>
                <div class="cart-item-price">₱${itemTotal.toFixed(2)}</div>
            </div>
            <button onclick="removeFromCart(${index})" style="background: #ff4444; color: white; border: none; padding: 5px 10px; border-radius: 5px; cursor: pointer;">
                <i class="fas fa-trash"></i>
            </button>
        `;
        cartItems.appendChild(cartItem);
    });
    
    cartTotal.textContent = total.toFixed(2);
}

function removeFromCart(index) {
    cart.splice(index, 1);
    updateCart();
}

function toggleCart() {
    const cart = document.getElementById('cart');
    cart.classList.toggle('active');
}

function checkout() {
    if (cart.length === 0) {
        showNotification('Your cart is empty!', 'error');
        return;
    }
    document.getElementById('paymentModal').style.display = 'block';
}

function selectPayment(method) {
    selectedPaymentMethod = method;
    document.querySelectorAll('.payment-method').forEach(el => el.classList.remove('selected'));
    event.currentTarget.classList.add('selected');
}

function closePayment() {
    document.getElementById('paymentModal').style.display = 'none';
}

function processOrder() {
    const orderId = 'ORD' + Date.now();
    const order = {
        id: orderId,
        items: [...cart],
        total: cart.reduce((sum, item) => sum + (item.price * item.quantity), 0),
        date: new Date().toLocaleString(),
        status: 'Processing'
    };
    
    orders.push(order);
    cart = [];
    updateCart();
    closePayment();
    toggleCart();
    showNotification('Order placed successfully!');
    updateOrdersDisplay();
}

function toggleOrders() {
    document.getElementById('ordersModal').style.display = 'block';
    updateOrdersDisplay();
}

function updateOrdersDisplay() {
    const ordersList = document.getElementById('ordersList');
    
    if (orders.length === 0) {
        ordersList.innerHTML = '<p style="text-align: center; color: #999; padding: 20px;">No orders yet</p>';
        return;
    }
    
    ordersList.innerHTML = '';
    orders.forEach(order => {
        const orderDiv = document.createElement('div');
        orderDiv.style.cssText = 'border: 1px solid #ddd; border-radius: 10px; padding: 20px; margin-bottom: 20px;';
        orderDiv.innerHTML = `
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 15px;">
                <h3>Order #${order.id}</h3>
                <button onclick="cancelOrder('${order.id}')" style="background: #ff4444; color: white; border: none; padding: 8px 15px; border-radius: 5px; cursor: pointer;">
                    Cancel Order
                </button>
            </div>
            <p><strong>Date:</strong> ${order.date}</p>
            <p><strong>Status:</strong> <span style="color: #2a5298;">${order.status}</span></p>
            <p><strong>Total:</strong> ₱${order.total.toFixed(2)}</p>
            <div style="margin-top: 15px;">
                <strong>Items:</strong>
                <ul style="padding-left: 20px; margin-top: 10px;">
                    ${order.items.map(item => `<li>${item.name} x ${item.quantity}</li>`).join('')}
                </ul>
            </div>
        `;
        ordersList.appendChild(orderDiv);
    });
}

function cancelOrder(orderId) {
    const orderIndex = orders.findIndex(order => order.id === orderId);
    if (orderIndex !== -1) {
        orders[orderIndex].status = 'Cancelled';
        updateOrdersDisplay();
        showNotification('Order cancelled successfully!');
    }
}

function showNotification(message, type = 'success') {
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: ${type === 'success' ? '#4CAF50' : '#f44336'};
        color: white;
        padding: 15px 20px;
        border-radius: 10px;
        box-shadow: 0 5px 20px rgba(0,0,0,0.2);
        z-index: 2000;
        animation: slideIn 0.3s ease;
    `;
    notification.textContent = message;
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.remove();
    }, 3000);
}

function setupEventListeners() {
    // Modal close buttons
    document.querySelectorAll('.close').forEach(closeBtn => {
        closeBtn.onclick = function() {
            this.closest('.modal').style.display = 'none';
        };
    });

    // Payment form
    document.getElementById('paymentForm').onsubmit = function(e) {
        e.preventDefault();
        if (!selectedPaymentMethod) {
            showNotification('Please select a payment method!', 'error');
            return;
        }
        
        // Simulate payment processing
        setTimeout(() => {
            processOrder();
            showNotification('Thanks for your order, this is only a demo store!');
        }, 1000);
    };

    // Click outside modal to close
    window.onclick = function(event) {
        if (event.target.classList.contains('modal')) {
            event.target.style.display = 'none';
        }
    };
                     }
          
