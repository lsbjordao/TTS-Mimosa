// Import genus Mimosa
import { Mimosa } from '.'

// Import characters
import { 
    Stems, 
    Trichomes,
    Prickles,
    Stipule, 
    Leaf, 
    Inflorescence, 
    Flower,
    Androecium,
    Ginoecium,
    Fruit
} from '../../characters/v1'
import { Bipinnate, Petiole } from '../../characters/v1/Leaf'
import { Rachis, Pinnae } from '../../characters/v1/Leaf/Bipinnate'
import { Spicule } from '../../characters/v1/Leaf/Bipinnate/Rachis/Spicule'
import { Rachilla, Leaflet, Paraphillidia } from '../../characters/v1/Leaf/Bipinnate/Pinnae'
import {
    AdaxialLeaflet, 
    AbaxialLeaflet, 
    MarginLeaflet
} from '../../characters/v1/Leaf/Bipinnate/Pinnae/Leaflet'
import { AdaxialStipule, AbaxialStipule, MarginStipule } from '../../characters/v1/Stipule'
import { Peduncle, CapitateInflorescence } from '../../characters/v1/Inflorescence'
import { Calyx, Corolla, Bracteole } from '../../characters/v1/Flower'
import { Stipe, Epicarp, Replum } from '../../characters/v1/Fruit'
import { Filaments } from '../../characters/v1/Androecium'
import { Ovary } from '../../characters/v1/Ginoecium'
import { Seed } from '../../characters/v1/Seed'

// Import annotation classes
import { Source, DescriptionAuthorship } from '../../characters/v1'


// Description of Mimosa weberbaueri
const Mimosa_weberbaueri = new Mimosa()
Mimosa_weberbaueri.specificEpithet = 'weberbaueri'

Mimosa_weberbaueri.stems = new Stems()

Mimosa_weberbaueri.stipule = new Stipule()
Mimosa_weberbaueri.stipule.margin = new MarginStipule()
Mimosa_weberbaueri.stipule.adaxial = new AdaxialStipule()
Mimosa_weberbaueri.stipule.abaxial = new AbaxialStipule()

Mimosa_weberbaueri.leaf = new Leaf()
Mimosa_weberbaueri.leaf.petiole = new Petiole()
Mimosa_weberbaueri.leaf.bipinnate = new Bipinnate()
Mimosa_weberbaueri.leaf.bipinnate.rachis = new Rachis()
Mimosa_weberbaueri.leaf.bipinnate.rachis.spicule = new Spicule()
Mimosa_weberbaueri.leaf.bipinnate.pinnae = new Pinnae()
Mimosa_weberbaueri.leaf.bipinnate.pinnae.setNumberOfPairsMinMax(4, 9)
Mimosa_weberbaueri.leaf.bipinnate.pinnae.setNumberOfPairsRarelyMax(10)
Mimosa_weberbaueri.leaf.bipinnate.pinnae.paraphillidia = new Paraphillidia()
Mimosa_weberbaueri.leaf.bipinnate.pinnae.rachilla = new Rachilla()
Mimosa_weberbaueri.leaf.bipinnate.pinnae.leaflet = new Leaflet()
Mimosa_weberbaueri.leaf.bipinnate.pinnae.leaflet.setNumberOfPairsRarelyMin(5)
Mimosa_weberbaueri.leaf.bipinnate.pinnae.leaflet.setNumberOfPairsMinMax(6, 19)
Mimosa_weberbaueri.leaf.bipinnate.pinnae.leaflet.margin = new MarginLeaflet()
Mimosa_weberbaueri.leaf.bipinnate.pinnae.leaflet.adaxial = new AdaxialLeaflet()
Mimosa_weberbaueri.leaf.bipinnate.pinnae.leaflet.abaxial = new AbaxialLeaflet()

Mimosa_weberbaueri.inflorescence = new Inflorescence()
Mimosa_weberbaueri.inflorescence.peduncle = new Peduncle()
Mimosa_weberbaueri.inflorescence.capitate = new CapitateInflorescence()

Mimosa_weberbaueri.flower = new Flower()
Mimosa_weberbaueri.flower.bracteole = new Bracteole()
Mimosa_weberbaueri.flower.merism = '5-merous'
Mimosa_weberbaueri.flower.numberWhorlsOfStamens = 'diplostemonous'
Mimosa_weberbaueri.flower.calyx = new Calyx()
Mimosa_weberbaueri.flower.calyx.shape = 'campanulate'
Mimosa_weberbaueri.flower.corolla = new Corolla()
Mimosa_weberbaueri.flower.corolla.shape = 'vase-shaped'

Mimosa_weberbaueri.androecium = new Androecium()
Mimosa_weberbaueri.androecium.filaments = new Filaments()
Mimosa_weberbaueri.androecium.filaments.colour = 'whitenish'

Mimosa_weberbaueri.ginoecium = new Ginoecium()
Mimosa_weberbaueri.ginoecium.ovary = new Ovary()

Mimosa_weberbaueri.fruit = new Fruit()
Mimosa_weberbaueri.fruit.stipe = new Stipe()
Mimosa_weberbaueri.fruit.replum = new Replum()
Mimosa_weberbaueri.fruit.epicarp = new Epicarp()

Mimosa_weberbaueri.seed = new Seed()


// Description authorship
Mimosa_weberbaueri.descriptionAuthorship = new DescriptionAuthorship()
Mimosa_weberbaueri.descriptionAuthorship.addAuthor({
    name: 'Barneby',
    date: 1703709352 
})


// Sources


// Export Mimosa weberbaueri
export { Mimosa_weberbaueri }