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


// Description of Mimosa schrankioides
const Mimosa_schrankioides = new Mimosa()
Mimosa_schrankioides.specificEpithet = 'schrankioides'

Mimosa_schrankioides.stems = new Stems()

Mimosa_schrankioides.stipule = new Stipule()
Mimosa_schrankioides.stipule.margin = new MarginStipule()
Mimosa_schrankioides.stipule.adaxial = new AdaxialStipule()
Mimosa_schrankioides.stipule.abaxial = new AbaxialStipule()

Mimosa_schrankioides.leaf = new Leaf()
Mimosa_schrankioides.leaf.petiole = new Petiole()
Mimosa_schrankioides.leaf.bipinnate = new Bipinnate()
Mimosa_schrankioides.leaf.bipinnate.rachis = new Rachis()
Mimosa_schrankioides.leaf.bipinnate.rachis.spicule = new Spicule()
Mimosa_schrankioides.leaf.bipinnate.pinnae = new Pinnae()
Mimosa_schrankioides.leaf.bipinnate.pinnae.setNumberOfPairs(1)
Mimosa_schrankioides.leaf.bipinnate.pinnae.paraphillidia = new Paraphillidia()
Mimosa_schrankioides.leaf.bipinnate.pinnae.rachilla = new Rachilla()
Mimosa_schrankioides.leaf.bipinnate.pinnae.leaflet = new Leaflet()
Mimosa_schrankioides.leaf.bipinnate.pinnae.leaflet.setNumberOfPairsMinMax(15, 2)
Mimosa_schrankioides.leaf.bipinnate.pinnae.leaflet.setNumberOfPairsRarelyMax(20)
Mimosa_schrankioides.leaf.bipinnate.pinnae.leaflet.margin = new MarginLeaflet()
Mimosa_schrankioides.leaf.bipinnate.pinnae.leaflet.adaxial = new AdaxialLeaflet()
Mimosa_schrankioides.leaf.bipinnate.pinnae.leaflet.abaxial = new AbaxialLeaflet()

Mimosa_schrankioides.inflorescence = new Inflorescence()
Mimosa_schrankioides.inflorescence.peduncle = new Peduncle()
Mimosa_schrankioides.inflorescence.capitate = new CapitateInflorescence()

Mimosa_schrankioides.flower = new Flower()
Mimosa_schrankioides.flower.bracteole = new Bracteole()
Mimosa_schrankioides.flower.merism = '4-merous'
Mimosa_schrankioides.flower.numberWhorlsOfStamens = 'isostemonous'
Mimosa_schrankioides.flower.calyx = new Calyx()
Mimosa_schrankioides.flower.corolla = new Corolla()

Mimosa_schrankioides.androecium = new Androecium()
Mimosa_schrankioides.androecium.filaments = new Filaments()
Mimosa_schrankioides.androecium.filaments.colour = ['whitenish', 'pinkish']

Mimosa_schrankioides.ginoecium = new Ginoecium()
Mimosa_schrankioides.ginoecium.ovary = new Ovary()

Mimosa_schrankioides.fruit = new Fruit()
Mimosa_schrankioides.fruit.stipe = new Stipe()
Mimosa_schrankioides.fruit.replum = new Replum()
Mimosa_schrankioides.fruit.epicarp = new Epicarp()

Mimosa_schrankioides.seed = new Seed()


// Description authorship
Mimosa_schrankioides.descriptionAuthorship = new DescriptionAuthorship()
Mimosa_schrankioides.descriptionAuthorship.addAuthor({
    name: 'Barneby',
    date: 1703709351 
})


// Sources


// Export Mimosa schrankioides
export { Mimosa_schrankioides }