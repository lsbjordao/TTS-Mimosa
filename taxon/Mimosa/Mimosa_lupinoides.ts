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


// Description of Mimosa lupinoides
const Mimosa_lupinoides = new Mimosa()
Mimosa_lupinoides.specificEpithet = 'lupinoides'

Mimosa_lupinoides.stems = new Stems()

Mimosa_lupinoides.stipule = new Stipule()
Mimosa_lupinoides.stipule.margin = new MarginStipule()
Mimosa_lupinoides.stipule.adaxial = new AdaxialStipule()
Mimosa_lupinoides.stipule.abaxial = new AbaxialStipule()

Mimosa_lupinoides.leaf = new Leaf()
Mimosa_lupinoides.leaf.petiole = new Petiole()
Mimosa_lupinoides.leaf.bipinnate = new Bipinnate()
Mimosa_lupinoides.leaf.bipinnate.rachis = new Rachis()
Mimosa_lupinoides.leaf.bipinnate.rachis.spicule = new Spicule()
Mimosa_lupinoides.leaf.bipinnate.pinnae = new Pinnae()
Mimosa_lupinoides.leaf.bipinnate.pinnae.setNumberOfPairsRarelyMin(1)
Mimosa_lupinoides.leaf.bipinnate.pinnae.setNumberOfPairsRarelyMax(3)
Mimosa_lupinoides.leaf.bipinnate.pinnae.paraphillidia = new Paraphillidia()
Mimosa_lupinoides.leaf.bipinnate.pinnae.rachilla = new Rachilla()
Mimosa_lupinoides.leaf.bipinnate.pinnae.leaflet = new Leaflet()
Mimosa_lupinoides.leaf.bipinnate.pinnae.leaflet.setNumberOfPairsMinMax(30, 52)
Mimosa_lupinoides.leaf.bipinnate.pinnae.leaflet.margin = new MarginLeaflet()
Mimosa_lupinoides.leaf.bipinnate.pinnae.leaflet.adaxial = new AdaxialLeaflet()
Mimosa_lupinoides.leaf.bipinnate.pinnae.leaflet.abaxial = new AbaxialLeaflet()

Mimosa_lupinoides.inflorescence = new Inflorescence()
Mimosa_lupinoides.inflorescence.peduncle = new Peduncle()
Mimosa_lupinoides.inflorescence.capitate = new CapitateInflorescence()

Mimosa_lupinoides.flower = new Flower()
Mimosa_lupinoides.flower.bracteole = new Bracteole()
Mimosa_lupinoides.flower.merism = '4-merous'
Mimosa_lupinoides.flower.numberWhorlsOfStamens = 'isostemonous'
Mimosa_lupinoides.flower.calyx = new Calyx()
Mimosa_lupinoides.flower.calyx.shape = 'paleaceous'
Mimosa_lupinoides.flower.corolla = new Corolla()
Mimosa_lupinoides.flower.corolla.shape = 'funnelform'

Mimosa_lupinoides.androecium = new Androecium()
Mimosa_lupinoides.androecium.filaments = new Filaments()
Mimosa_lupinoides.androecium.filaments.colour = 'pinkish'

Mimosa_lupinoides.ginoecium = new Ginoecium()
Mimosa_lupinoides.ginoecium.ovary = new Ovary()

Mimosa_lupinoides.fruit = new Fruit()
Mimosa_lupinoides.fruit.stipe = new Stipe()
Mimosa_lupinoides.fruit.replum = new Replum()
Mimosa_lupinoides.fruit.epicarp = new Epicarp()

Mimosa_lupinoides.seed = new Seed()


// Description authorship
Mimosa_lupinoides.descriptionAuthorship = new DescriptionAuthorship()
Mimosa_lupinoides.descriptionAuthorship.addAuthor({
    name: 'Barneby',
    date: 1703709352 
})


// Sources


// Export Mimosa lupinoides
export { Mimosa_lupinoides }